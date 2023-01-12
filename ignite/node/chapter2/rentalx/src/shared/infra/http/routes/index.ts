import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { carRoutes } from "./car.routes";
import { categoryRoutes } from "./category.routes";
import { passwordRoutes } from "./password.routes";
import { rentalRoutes } from "./rental.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);
router.use("/cars", carRoutes);
router.use("/rentals", rentalRoutes);
router.use("/password", passwordRoutes);
router.use(authenticationRoutes);

export { router };
// eslint-disable-next-line prettier/prettier
