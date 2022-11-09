import { Router } from "express";

import { departmentController } from "../controllers/Department";

const departmentRoutes = Router();

departmentRoutes.post("/", (request, response) => {
  departmentController.create(request, response);
});

departmentRoutes.get("/", (request, response) => {
  departmentController.listAll(request, response);
});

export { departmentRoutes };
