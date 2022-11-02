import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();

const repository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const isCategoryAlreadyExists = repository.findByName(name);

  if (isCategoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists." });
  }

  repository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const findAll = repository.list();

  return response.json(findAll);
});

export { categoriesRoutes };
