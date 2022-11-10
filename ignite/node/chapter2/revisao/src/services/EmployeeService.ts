import { Employee } from "../models/Employee";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

interface IRequestData {
  name: string;
  lastName: string;
  age: number;
  gender: string;
}

class EmployeeService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: IEmployeeRepository) { }

  create(data: IRequestData): void {
    const isEmployeeAlreadyExists = this.repository.findByName(data.name);

    if (isEmployeeAlreadyExists) {
      throw new Error("Employee already exists");
    }

    this.repository.create(data);
  }

  listAll(): Employee[] {
    return this.repository.listAll();
  }
}

export { EmployeeService };
