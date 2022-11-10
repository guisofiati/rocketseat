import { Employee } from "../models/Employee";

interface INewEmployee {
  name: string;
  lastName: string;
  age: number;
  gender: string;
}

interface IEmployeeRepository {
  create(data: INewEmployee): void;
  listAll(): Employee[];
  findByName(name: string): Employee;
}

export { INewEmployee, IEmployeeRepository };
