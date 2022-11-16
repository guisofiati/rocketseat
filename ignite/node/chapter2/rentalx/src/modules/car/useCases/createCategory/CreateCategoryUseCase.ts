import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequestData {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private repository: ICategoryRepository) {}

  async execute({ name, description }: IRequestData): Promise<void> {
    // const repository = new CategoryRepository(); -> Tirar a responsabilidade do service e deixar para quem chama o service
    const isCategoryAlreadyExists = await this.repository.findByName(name);

    if (isCategoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
