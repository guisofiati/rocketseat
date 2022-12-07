import { Router } from "express";

import { AuthenticateUserController } from "@modules/account/useCases/authenticateUser/AuthenticateUserController";

const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/auth", authenticateUserController.handle);

export { authenticationRoutes };
// eslint-disable-next-line prettier/prettier
