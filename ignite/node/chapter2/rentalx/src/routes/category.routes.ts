import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/car/useCases/createCategory";
import { importCategoryController } from "../modules/car/useCases/importCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";

const categoryRoutes = Router();

const upload = multer({
  dest: "./temp",
});

categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoryRoutes };
