import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserError } from "./CreateUserError";
import { CreateUserUseCase } from "./CreateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase

describe("Create user", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "Ciclano",
      email: "ciclano@gmail.com",
      password: "123"
    });

    expect(user).toHaveProperty("email");
  });

  it("should not be able to create a new user when user exists", async () => {
   expect(async () => {

    const user = {
      name: "Ciclano",
      email: "ciclano@gmail.com",
      password: "123"
    }

     await createUserUseCase.execute({
       name: user.name,
       email: user.email,
       password: user.password
     });

     await createUserUseCase.execute({
       name: user.name,
       email: user.email,
       password: user.password
     });
   }).rejects.toBeInstanceOf(CreateUserError);
  });
})
