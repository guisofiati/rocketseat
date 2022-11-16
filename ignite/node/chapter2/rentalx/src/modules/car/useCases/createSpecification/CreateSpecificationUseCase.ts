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

  async execute({ name, description }: IRequestData): Promise<void> {
    const isSpecificationAlreadyExists = await this.repository.findByName(name);

    if (isSpecificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    await this.repository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
