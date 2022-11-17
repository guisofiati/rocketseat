import { container } from "tsyringe";

import { UserRepository } from "../../src/modules/account/repositories/implementations/UserRepository";
import { IUsersRepository } from "../../src/modules/account/repositories/IUserRepository";
import { ICategoryRepository } from "../../src/modules/car/repositories/ICategoryRepository";
import { CategoryRepository } from "../../src/modules/car/repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "../../src/modules/car/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../src/modules/car/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
