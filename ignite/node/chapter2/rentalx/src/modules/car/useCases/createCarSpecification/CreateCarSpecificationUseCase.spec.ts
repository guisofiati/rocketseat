import { CarRepositoryInMemory } from "@modules/car/repositories/in-memory/CarRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/car/repositories/in-memory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let carRepositoryInMemory: CarRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create car specification", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
      specificationRepositoryInMemory,
    );
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationRepositoryInMemory.create({
      name: "Test",
      description: "Test",
    });

    const specifications_id = [specification.id];

    const specificationsCar = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    // console.log(specificationsCar);

    expect(specificationsCar).toHaveProperty("specifications");
    expect(specificationsCar.specifications.length).toBe(1);
  });

  it("should not be able to add a new specification to a nonexistent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["Specification 1", "Specification 2"];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
