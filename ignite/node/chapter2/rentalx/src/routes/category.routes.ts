import { Router } from "express";

import { CategoryRepository } from "../modules/car/repositories/CategoryRepository";
import { createCategoryController } from "../modules/car/useCases/createCategory";

const categoryRoutes = Router();

const repository = new CategoryRepository();

categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
  const findAll = repository.list();

  return response.json(findAll);
});

export { categoryRoutes };
