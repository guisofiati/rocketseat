import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private repository: ICategoryRepository) { }

  execute(): Category[] {
    const categories = this.repository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
