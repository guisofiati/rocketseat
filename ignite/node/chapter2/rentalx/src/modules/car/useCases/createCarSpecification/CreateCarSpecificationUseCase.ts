import { inject, injectable } from "tsyringe";

import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/car/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/car/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarsRepository,
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const isCarExists = await this.carRepository.findById(car_id);

    if (!isCarExists) {
      throw new AppError("Car does not exists");
    }

    const specifications = await this.specificationRepository.findByIds(
      specifications_id,
    );

    isCarExists.specifications = specifications;

    await this.carRepository.create(isCarExists);

    return isCarExists;
  }
}

export { CreateCarSpecificationUseCase };
// eslint-disable-next-line prettier/prettier
