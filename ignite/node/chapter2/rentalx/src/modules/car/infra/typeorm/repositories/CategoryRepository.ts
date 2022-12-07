import { getRepository, Repository } from "typeorm";

import {
  ICategoryRepository,
  // eslint-disable-next-line prettier/prettier
  ICreateCategoryDTO
} from "@modules/car/repositories/ICategoryRepository";

import { Category } from "../entities/Category";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
// eslint-disable-next-line prettier/prettier
