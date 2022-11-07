import { Router } from "express";

import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./spefication.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);

export { router };
