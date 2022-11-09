import { Request, Response } from "express";

import { DepartmentService } from "../../services/DepartmentService";

class DepartmentController {
  // eslint-disable-next-line prettier/prettier
  constructor(private service: DepartmentService) { }

  create(request: Request, response: Response): Response {
    const { name } = request.body;

    this.service.create({ name });

    return response.status(201).send();
  }

  listAll(request: Request, response: Response): Response {
    const list = this.service.listAll();
    return response.json(list);
  }
}

export { DepartmentController };
