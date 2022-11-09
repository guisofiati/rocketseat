import { Router } from "express";

import { departmentRoutes } from "./Department.routes";

const router = Router();

router.use("/departments", departmentRoutes);

export { router };
