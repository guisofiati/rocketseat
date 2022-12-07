/* eslint-disable prettier/prettier */
import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/car/repositories/ICategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository,
  ) { }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      // delimiter default: " , ". Vai ler linha por linha
      const parseFile = parse();

      // joga o conteudo da stream para algum lugar/variavel
      stream.pipe(parseFile);

      parseFile
        .on("data", async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          // remoção do arquivo na temp
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async category => {
      const { name, description } = category;

      const isCategoryAlreadyExists = await this.categoryRepository.findByName(
        name,
      );

      if (!isCategoryAlreadyExists) {
        await this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };

