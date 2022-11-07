import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createSpeficationUseCase: CreateSpecificationUseCase) { }
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpeficationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
