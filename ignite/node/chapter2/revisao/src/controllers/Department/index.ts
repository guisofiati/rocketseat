import { DepartmentRepository } from "../../repositories/implementations/DepartmentRepository";
import { DepartmentService } from "../../services/DepartmentService";
import { DepartmentController } from "./DepartmentController";

const departmentRepository = DepartmentRepository.getInstance();

const departmentService = new DepartmentService(departmentRepository);

const departmentController = new DepartmentController(departmentService);

export { departmentController };
