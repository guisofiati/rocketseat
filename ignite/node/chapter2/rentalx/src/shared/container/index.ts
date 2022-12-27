import "reflect-metadata";
import { container } from "tsyringe";

import "@shared/container/providers";

import { UserRepository } from "@modules/account/infra/typeorm/repositories/UserRepository";
import { IUsersRepository } from "@modules/account/repositories/IUserRepository";
import { CarRepository } from "@modules/car/infra/typeorm/repositories/CarRepository";
import { CarsImageRepository } from "@modules/car/infra/typeorm/repositories/CarsImageRepository";
import { CategoryRepository } from "@modules/car/infra/typeorm/repositories/CategoryRepository";
import { SpecificationRepository } from "@modules/car/infra/typeorm/repositories/SpecificationRepository";
import { ICarsImageRepository } from "@modules/car/repositories/ICarsImageRepository";
import { ICarsRepository } from "@modules/car/repositories/ICarsRepository";
import { ICategoryRepository } from "@modules/car/repositories/ICategoryRepository";
import { ISpecificationRepository } from "@modules/car/repositories/ISpecificationRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);

container.registerSingleton<ICarsRepository>("CarRepository", CarRepository);

container.registerSingleton<ICarsImageRepository>(
  "CarsImageRepository",
  CarsImageRepository,
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository,
);
