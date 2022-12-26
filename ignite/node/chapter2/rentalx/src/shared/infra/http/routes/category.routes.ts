import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/car/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/car/useCases/importCategory/importCategoryController";
import { ListCategoriesController } from "@modules/car/useCases/listCategories/ListCategoriesController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const categoryRoutes = Router();

const upload = multer({
  dest: "./temp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoryRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoryRoutes.get("/", listCategoriesController.handle);

categoryRoutes.post(
  "/import",
  ensureAuthenticated,
  ensureAdmin,
  upload.single("file"),
  importCategoryController.handle,
);

export { categoryRoutes };
// eslint-disable-next-line prettier/prettier
