import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/account/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  // destructuring token: Bearer ac238c34sdlsdl34ksd823239d283j32
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "d652eeeea9a382e2b37ad73e0a66b131",
    ) as IPayload;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
