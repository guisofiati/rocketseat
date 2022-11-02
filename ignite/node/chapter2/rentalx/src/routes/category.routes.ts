import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoryRoutes = Router();

const repository = new CategoryRepository();

categoryRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const isCategoryAlreadyExists = repository.findByName(name);

  if (isCategoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists." });
  }

  repository.create({ name, description });

  return response.status(201).send();
});

categoryRoutes.get("/", (request, response) => {
  const findAll = repository.list();

  return response.json(findAll);
});

export { categoryRoutes };
