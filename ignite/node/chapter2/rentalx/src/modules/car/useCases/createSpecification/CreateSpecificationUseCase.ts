import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequestData {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private repository: ISpecificationRepository,
  ) {}

  execute({ name, description }: IRequestData): void {
    const isSpecificationAlreadyExists = this.repository.findByName(name);

    if (isSpecificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.repository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
