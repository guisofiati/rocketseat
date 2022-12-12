import { ICreateCarDTO } from "@modules/car/dtos/ICreateCarsDTO";
import { Car } from "@modules/car/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    // { name, description, daily_rate, available, license_plate, fine_amount, brand, category_id }: ICreateCarDTO
    const car = new Car();

    Object.assign(car, {
      ...data,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);
  }
}

export { CarRepositoryInMemory };
// eslint-disable-next-line prettier/prettier
