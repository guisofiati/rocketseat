import { Category } from "../../models/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: ICategoryRepository) { }

  execute(): Category[] {
    const categories = this.repository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
