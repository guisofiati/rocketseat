/* eslint-disable prettier/prettier */

import { inject, injectable } from "tsyringe";

import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/car/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarRepository") 
    private carRepository: ICarsRepository) { }

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }: IRequest): Promise<Car> {
    const carAlreadyExists = await this.carRepository.findByLicensePlate(license_plate);

    if (carAlreadyExists) {
      throw new AppError("Car already exists");
    }

    const car = await this.carRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });

    return car;
  }
}

export { CreateCarUseCase };

