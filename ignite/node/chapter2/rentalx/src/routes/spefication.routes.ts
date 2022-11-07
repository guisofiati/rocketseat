import { Router } from "express";

import { SpecificationRepository } from "../modules/car/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/car/services/CreateSpecificationService";

const specificationRoutes = Router();

const repository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpeficationService = new CreateSpecificationService(repository);

  createSpeficationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };
