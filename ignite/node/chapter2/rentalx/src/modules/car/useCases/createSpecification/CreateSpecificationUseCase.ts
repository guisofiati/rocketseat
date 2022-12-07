/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ISpecificationRepository } from "@modules/car/repositories/ISpecificationRepository";

interface IRequestData {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private repository: ISpecificationRepository,
  ) { }

  async execute({ name, description }: IRequestData): Promise<void> {
    const isSpecificationAlreadyExists = await this.repository.findByName(name);

    if (isSpecificationAlreadyExists) {
      throw new AppError("Specification already exists");
    }

    await this.repository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };

