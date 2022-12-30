import { OperationType } from "@modules/statements/entities/Statement";
import { InMemoryStatementsRepository } from "@modules/statements/repositories/in-memory/InMemoryStatementsRepository";
import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";
import { CreateStatementUseCase } from "../createStatement/CreateStatementUseCase";
import { GetBalanceError } from "./GetBalanceError";
import { GetBalanceUseCase } from "./GetBalanceUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let inMemoryStatementsRepository: InMemoryStatementsRepository;
let getBalanceUseCase: GetBalanceUseCase;
let createStatementUseCase: CreateStatementUseCase;

describe("Get balance", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    inMemoryStatementsRepository = new InMemoryStatementsRepository();
    getBalanceUseCase = new GetBalanceUseCase(inMemoryStatementsRepository, inMemoryUsersRepository);
    createStatementUseCase = new CreateStatementUseCase(inMemoryUsersRepository, inMemoryStatementsRepository);
  });

  it("should be able to get user balance", async () => {
    const user = await createUserUseCase.execute({
      name: "User test",
      email: "test@example.com",
      password: "123"
    });

    const { id } = user;

    await createStatementUseCase.execute({
      user_id: id as string,
      amount: 900.00,
      description: "PIX",
      type: OperationType.DEPOSIT
    });

    await createStatementUseCase.execute({
      user_id: id as string,
      amount: 800.00,
      description: "Withdraw to buy a cellphone",
      type: OperationType.WITHDRAW
    });

    const statement = await getBalanceUseCase.execute({
      user_id: id as string,
    });

    const { balance } = statement;

    expect(statement).toHaveProperty("balance");
    expect(balance).not.toBeNull();
  });

  it("should not be able to get balance when user does not exists", async () => {
    expect(async () => {
      await getBalanceUseCase.execute({
        user_id: "user_unknown",
      });
    }).rejects.toBeInstanceOf(GetBalanceError);
  });
});
