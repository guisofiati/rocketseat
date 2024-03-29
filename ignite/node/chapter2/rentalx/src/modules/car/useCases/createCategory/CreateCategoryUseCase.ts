/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/car/repositories/ICategoryRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequestData {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private repository: ICategoryRepository,
  ) { }

  async execute({ name, description }: IRequestData): Promise<void> {
    // const repository = new CategoryRepository(); -> Tirar a responsabilidade do service e deixar para quem chama o service
    const isCategoryAlreadyExists = await this.repository.findByName(name);

    if (isCategoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    await this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };

