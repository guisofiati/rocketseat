import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoryRoutes = Router();

const repository = new CategoryRepository();

categoryRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(repository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoryRoutes.get("/", (request, response) => {
  const findAll = repository.list();

  return response.json(findAll);
});

export { categoryRoutes };
