import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/car/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/car/useCases/importCategory/importCategoryController";
import { ListCategoriesController } from "../modules/car/useCases/listCategories/ListCategoriesController";

const categoryRoutes = Router();

const upload = multer({
  dest: "./temp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", listCategoriesController.handle);

categoryRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle,
);

export { categoryRoutes };
