import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/car/dtos/ICreateCarsDTO";
import { ICarsRepository } from "@modules/car/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.repository.findOne({ license_plate });

    return car;
  }
}

export { CarRepository };
// eslint-disable-next-line prettier/prettier
