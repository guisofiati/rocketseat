import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ShowUserProfileError } from "./ShowUserProfileError";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

let inMemoryUserRepository: InMemoryUsersRepository;
let showUserProfileUseCase: ShowUserProfileUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Show user profile", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUsersRepository();
    showUserProfileUseCase = new ShowUserProfileUseCase(inMemoryUserRepository);
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
  });

  it("should be able to get user profile", async () => {
    const user = await createUserUseCase.execute({
      name: "User test",
      email: "test@example.com",
      password: "123"
    });

    const { id } = user;

    const profile = await showUserProfileUseCase.execute(id as string);

    expect(profile).toHaveProperty("id");
    expect(profile).toHaveProperty("name");
    expect(profile).toHaveProperty("email");
  });

  it("should not be able to get user profile when user does not exists", async () => {
    expect(async () => {
      await showUserProfileUseCase.execute("1");
    }).rejects.toBeInstanceOf(ShowUserProfileError)
  })
});
