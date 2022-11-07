import { Router } from "express";

import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";

const categoryRoutes = Router();

categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoryRoutes };
