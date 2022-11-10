import { Employee } from "../../models/Employee";
import { IEmployeeRepository, INewEmployee } from "../IEmployeeRepository";

class EmployeeRepository implements IEmployeeRepository {
  private employees: Employee[];

  private static INSTANCE: EmployeeRepository;

  private constructor() {
    this.employees = [];
  }

  public static getInstance(): EmployeeRepository {
    if (!EmployeeRepository.INSTANCE) {
      EmployeeRepository.INSTANCE = new EmployeeRepository();
    }
    return EmployeeRepository.INSTANCE;
  }

  create(data: INewEmployee): void {
    const employee = new Employee();

    Object.assign(employee, {
      ...data,
    });

    this.employees.push(employee);
  }

  listAll(): Employee[] {
    return this.employees;
  }

  findByName(name: string): Employee {
    const employee = this.employees.find((employee) => employee.name === name);
    return employee;
  }

  findById(id: string): Employee {
    const employee = this.employees.find((employee) => employee.id === id);
    return employee;
  }
}

export { EmployeeRepository };
