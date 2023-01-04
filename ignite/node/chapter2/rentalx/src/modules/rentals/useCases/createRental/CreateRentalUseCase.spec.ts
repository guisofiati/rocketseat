import dayjs from "dayjs";

import { CarRepositoryInMemory } from "@modules/car/repositories/in-memory/CarRepositoryInMemory";
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayJsDateProvider: DayjsDateProvider;
let createRentalUseCase: CreateRentalUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe("Create rental", () => {
  const add24Hours = dayjs().add(1, "day").toDate();
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsDateProvider = new DayjsDateProvider();
    carRepositoryInMemory = new CarRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsDateProvider,
      carRepositoryInMemory,
    );
  });

  it("should be able to register a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "12345",
      expected_return_date: add24Hours,
    });

    // console.log(rental);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to register a new rental when there is an open rental by the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "test",
        car_id: "123",
        expected_return_date: add24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "test",
        car_id: "321",
        expected_return_date: add24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to register a new rental when there is an open rental by the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "123",
        car_id: "test",
        expected_return_date: add24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "321",
        car_id: "test",
        expected_return_date: add24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to register a new rental when invalid return time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "321",
        car_id: "test",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
