import { Department } from "../models/Department";
import { IDepartmentRepository } from "../repositories/IDepartmentRepository";

interface IRequestData {
  name: string;
}

class DepartmentService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: IDepartmentRepository) { }

  create({ name }: IRequestData): void {
    const isDepartmentAlreadyExists = this.repository.findByName(name);

    if (isDepartmentAlreadyExists) {
      throw new Error("Department already exists");
    }

    this.repository.create({ name });
  }

  listAll(): Department[] {
    return this.repository.list();
  }
}

export { DepartmentService };
