import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/account/repositories/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/account/repositories/in-memory/UserRepositoryInMemory";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "User test",
      email: "user@example.com",
      password: "1234",
      driver_license: "000123",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    // console.log(result);
    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate a nonexisting user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "fulano@gmail.com",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate user with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "User test",
        email: "ciclano@gmail.com",
        password: "1234",
        driver_license: "000123",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "4321",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
