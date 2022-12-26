import { inject, injectable } from "tsyringe";

import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/car/repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(@inject("CarRepository") private carRepository: ICarsRepository) { }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carRepository.findAllAvailable(
      brand,
      category_id,
      name,
    );
    return cars;
  }
}

export { ListAvailableCarsUseCase };
// eslint-disable-next-line prettier/prettier

