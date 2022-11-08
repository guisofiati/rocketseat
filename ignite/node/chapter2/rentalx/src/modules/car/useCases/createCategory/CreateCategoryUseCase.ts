import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequestData {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: ICategoryRepository) { }

  execute({ name, description }: IRequestData): void {
    // const repository = new CategoryRepository(); -> Tirar a responsabilidade do service e deixar para quem chama o service
    const isCategoryAlreadyExists = this.repository.findByName(name);

    if (isCategoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };