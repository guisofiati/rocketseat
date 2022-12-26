import { CarRepositoryInMemory } from "@modules/car/repositories/in-memory/CarRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carRepositoryInMemory: CarRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List cars", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carRepositoryInMemory,
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "ABC-1234",
      fine_amount: 40,
      brand: "Car brand",
      category_id: "Category test",
    });

    const cars = await listAvailableCarsUseCase.execute({});
    // console.log(cars);
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Car 2",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car brand test",
      category_id: "Category test",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car brand",
    });

    // console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "GHI-1234",
      fine_amount: 40,
      brand: "Car brand test",
      category_id: "Category test",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3",
    });

    // console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carRepositoryInMemory.create({
      name: "Car 4",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "JKL-1234",
      fine_amount: 40,
      brand: "Car brand test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    // console.log(cars);

    expect(cars).toEqual([car]);
  });
});
