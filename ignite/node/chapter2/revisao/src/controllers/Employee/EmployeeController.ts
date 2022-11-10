import { Request, Response } from "express";

import { EmployeeService } from "../../services/EmployeeService";

class EmployeeController {
  // eslint-disable-next-line prettier/prettier
  constructor(private service: EmployeeService) { }

  create(request: Request, response: Response): Response {
    const { name, lastName, age, gender } = request.body;

    this.service.create({ name, lastName, age, gender });

    return response.status(201).send();
  }

  listAll(request: Request, response: Response): Response {
    const list = this.service.listAll();
    return response.json(list);
  }
}

export { EmployeeController };
