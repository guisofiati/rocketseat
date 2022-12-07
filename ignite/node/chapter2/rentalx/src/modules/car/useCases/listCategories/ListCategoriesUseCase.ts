/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Category } from "@modules/car/entities/Category";
import { ICategoryRepository } from "@modules/car/repositories/ICategoryRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository") private repository: ICategoryRepository,
  ) { }

  async execute(): Promise<Category[]> {
    const categories = await this.repository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };

