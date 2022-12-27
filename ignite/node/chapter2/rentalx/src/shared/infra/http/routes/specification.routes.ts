import { Router } from "express";

import { CreateSpecificationController } from "@modules/car/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle,
);

export { specificationRoutes };
// eslint-disable-next-line prettier/prettier

