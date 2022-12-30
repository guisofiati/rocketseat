import { OperationType } from "@modules/statements/entities/Statement";
import { InMemoryStatementsRepository } from "@modules/statements/repositories/in-memory/InMemoryStatementsRepository";
import { GetStatementOperationUseCase } from "@modules/statements/useCases/getStatementOperation/GetStatementOperationUseCase";
import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";
import { CreateStatementUseCase } from "../createStatement/CreateStatementUseCase";
import { GetStatementOperationError } from "./GetStatementOperationError";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

let inMemoryStatementsRepository: InMemoryStatementsRepository;
let getStatementOperationUSeCase: GetStatementOperationUseCase;
let createStatementUseCase: CreateStatementUseCase;

describe("Get statement operation", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    inMemoryStatementsRepository = new InMemoryStatementsRepository();
    getStatementOperationUSeCase = new GetStatementOperationUseCase(inMemoryUsersRepository, inMemoryStatementsRepository);
    createStatementUseCase = new CreateStatementUseCase(inMemoryUsersRepository, inMemoryStatementsRepository);
  });

  it("should be able to get a statement operation", async () => {
    const user = await createUserUseCase.execute({
      name: "User test",
      email: "test@example.com",
      password: "123"
    });

    const { id: id_user } = user;

    const statement_deposit = await createStatementUseCase.execute({
      user_id: id_user as string,
      amount: 900.00,
      description: "PIX",
      type: OperationType.DEPOSIT
    });

    const { id: id_statement_deposit } = statement_deposit;

    const statement = await getStatementOperationUSeCase.execute({
      statement_id: id_statement_deposit as string,
      user_id: id_user as string
    });

    expect(statement).toHaveProperty("id");
  });

  it("should not be able to get a statement operation when statement does not exists", async () => {
      const { id: id_user } = await createUserUseCase.execute({
        name: "User test",
        email: "test@example.com",
        password: "123"
      });

      await expect(
        getStatementOperationUSeCase.execute({
          statement_id: "123",
          user_id: id_user as string
        })
      ).rejects.toBeInstanceOf(GetStatementOperationError.StatementNotFound);
  });

  it("should not be able to get a statement operation when user does not exists", async () =>{
    expect(async () => {
      const user = await createUserUseCase.execute({
        name: "User test",
        email: "test@example.com",
        password: "123"
      });

      const { id: id_user } = user;

      const statement_deposit = await createStatementUseCase.execute({
        user_id: id_user as string,
        amount: 900.00,
        description: "PIX",
        type: OperationType.DEPOSIT
      });

      const { id: id_statement_deposit } = statement_deposit;

      await getStatementOperationUSeCase.execute({
        statement_id: id_statement_deposit as string,
        user_id: "user_unknown"
      });
    }).rejects.toBeInstanceOf(GetStatementOperationError.UserNotFound);
  });
})
