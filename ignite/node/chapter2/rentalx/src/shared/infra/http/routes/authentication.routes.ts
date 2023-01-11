import { Router } from "express";

import { AuthenticateUserController } from "@modules/account/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/account/useCases/refreshToken/RefreshTokenController";

const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticationRoutes.post("/auth", authenticateUserController.handle);
authenticationRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticationRoutes };
// eslint-disable-next-line prettier/prettier
