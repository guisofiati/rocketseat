import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      /**
       * Temos que fazer essa conversão pois o que vem do header pode ser string ou string[]
       * e nosso método espera apenas uma string
       */

      const users = this.listAllUsersUseCase.execute({ user_id } as {
        user_id: string;
      });
      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
