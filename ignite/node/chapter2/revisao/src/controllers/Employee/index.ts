import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";
import { EmployeeService } from "../../services/EmployeeService";
import { EmployeeController } from "./EmployeeController";

const employeeRepository = EmployeeRepository.getInstance();

const employeeService = new EmployeeService(employeeRepository);

const employeeController = new EmployeeController(employeeService);

export { employeeController };
