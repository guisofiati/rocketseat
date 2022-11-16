import { container } from "tsyringe";

import { ICategoryRepository } from "../../src/modules/car/repositories/ICategoryRepository";
import { CategoryRepository } from "../../src/modules/car/repositories/implementations/CategoryRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository,
);
