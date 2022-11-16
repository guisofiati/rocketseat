import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private repository: ICategoryRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.repository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
