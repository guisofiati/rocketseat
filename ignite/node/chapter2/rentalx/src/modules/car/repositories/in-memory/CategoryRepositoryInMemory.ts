import { Category } from "../../infra/typeorm/entities/Category";
import {
  ICategoryRepository,
  // eslint-disable-next-line prettier/prettier
  ICreateCategoryDTO
} from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    const findAll = this.categories;
    return findAll;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoryRepositoryInMemory };
// eslint-disable-next-line prettier/prettier
