import { Specification } from "@modules/car/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  // eslint-disable-next-line prettier/prettier
  ISpecificationRepository
} from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      specification => specification.name === name,
    );
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const findAll = this.specifications.filter(specification =>
      ids.includes(specification.id),
    );

    return findAll;
  }
}

export { SpecificationRepositoryInMemory };
// eslint-disable-next-line prettier/prettier
