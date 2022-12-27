import { inject, injectable } from "tsyringe";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalRepository: IRentalsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    const minimumHour = 24;

    const isCarUnavailable = await this.rentalRepository.findOpenRentalByCar(
      car_id,
    );

    if (isCarUnavailable) {
      throw new AppError("Car is unavailable");
    }

    const isUserAlreadyOpenRental =
      await this.rentalRepository.findOpenRentalByUser(user_id);

    if (isUserAlreadyOpenRental) {
      throw new AppError("There's a rental in progress for this user");
    }

    const dateNow = this.dateProvider.dateNow();
    const compare = this.dateProvider.compareInHours(
      dateNow,
      expected_return_date,
    );

    if (compare < minimumHour) {
      throw new AppError("Rental must be at least for 24 hours");
    }

    // console.log(compare);

    const rental = await this.rentalRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}

export { CreateRentalUseCase };
// eslint-disable-next-line prettier/prettier
