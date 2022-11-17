import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(@inject("UserRepository") private repository: IUsersRepository) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.repository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
