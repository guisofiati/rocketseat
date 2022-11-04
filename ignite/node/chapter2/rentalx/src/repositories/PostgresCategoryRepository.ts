import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoryRepository implements ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }

  list(): Category[] {
    console.log("teste");
    return null;
  }

  findByName(name: string): Category {
    console.log(name);
    return null;
  }
}

export { PostgresCategoryRepository };
