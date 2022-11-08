import { Department } from "../../models/Department/Department";
import {
  IDepartmentRepository,
  INewDepartmentDTO,
} from "../IDepartmentRepository";

class DepartmentRepository implements IDepartmentRepository {
  private departments: Department[];

  private static INSTANCE: DepartmentRepository;

  private constructor() {
    this.departments = [];
  }

  public static getInstance(): DepartmentRepository {
    if (!DepartmentRepository.INSTANCE) {
      DepartmentRepository.INSTANCE = new DepartmentRepository();
    }
    return DepartmentRepository.INSTANCE;
  }

  create({ name }: INewDepartmentDTO): void {
    const department = new Department();

    Object.assign(department, {
      name,
    });

    this.departments.push(department);
  }

  list(): Department[] {
    return this.departments;
  }

  findByName(name: string): Department {
    const department = this.departments.find(
      (department) => department.name === name
    );
    return department;
  }
}

export { DepartmentRepository };
