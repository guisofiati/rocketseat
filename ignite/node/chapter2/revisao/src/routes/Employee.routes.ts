import { Router } from "express";

import { employeeController } from "../controllers/Employee";

const employeeRoutes = Router();

employeeRoutes.post("/", (request, response) => {
  employeeController.create(request, response);
});

employeeRoutes.get("/", (request, response) => {
  employeeController.listAll(request, response);
});

export { employeeRoutes };
