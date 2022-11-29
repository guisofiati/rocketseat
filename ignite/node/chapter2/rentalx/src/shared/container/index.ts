import { container } from "tsyringe";

import { UserRepository } from "../../modules/account/repositories/implementations/UserRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUserRepository";
import { ICategoryRepository } from "../../modules/car/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/car/repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "../../modules/car/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/car/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
