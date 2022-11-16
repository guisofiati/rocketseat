import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/car/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/car/useCases/importCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";

const categoryRoutes = Router();

const upload = multer({
  dest: "./temp",
});

const createCategoryController = new CreateCategoryController();

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoryRoutes };
