import { Router } from "express";

// eslint-disable-next-line import/no-unresolved
import { CreateUserController } from "../modules/account/useCases/createUser/createUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
