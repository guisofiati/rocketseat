import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { carRoutes } from "./car.routes";
import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./spefication.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);
router.use("/cars", carRoutes);
router.use(authenticationRoutes);

export { router };
// eslint-disable-next-line prettier/prettier
