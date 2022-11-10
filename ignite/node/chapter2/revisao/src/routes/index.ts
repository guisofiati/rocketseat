import { Router } from "express";

import { departmentRoutes } from "./Department.routes";
import { employeeRoutes } from "./Employee.routes";

const router = Router();

router.use("/departments", departmentRoutes);
router.use("/employees", employeeRoutes);

export { router };
