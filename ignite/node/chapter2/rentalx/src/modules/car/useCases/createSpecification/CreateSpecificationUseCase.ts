import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequestData {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private repository: ISpecificationRepository) {}

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
