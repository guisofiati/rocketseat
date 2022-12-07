import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/account/repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/account/repositories/IUserRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(@inject("UserRepository") private repository: IUsersRepository) { }

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const isUserAlreadyExists = await this.repository.findByEmail(email);

    if (isUserAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.repository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
// eslint-disable-next-line prettier/prettier
