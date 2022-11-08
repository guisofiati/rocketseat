import { Department } from "../models/Department/Department";

interface INewDepartmentDTO {
  name: string;
}

interface IDepartmentRepository {
  create({ name }: INewDepartmentDTO): void;
  list(): Department[];
  findByName(name: string): Department;
}

export { INewDepartmentDTO, IDepartmentRepository };
