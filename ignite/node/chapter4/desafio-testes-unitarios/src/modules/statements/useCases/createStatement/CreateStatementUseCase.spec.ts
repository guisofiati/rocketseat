import { OperationType } from "@modules/statements/entities/Statement";
import { InMemoryStatementsRepository } from "@modules/statements/repositories/in-memory/InMemoryStatementsRepository";
import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";
import { CreateStatementError } from "./CreateStatementError";
import { CreateStatementUseCase } from "./CreateStatementUseCase";
import { ICreateStatementDTO } from "./ICreateStatementDTO";

let inMemoryStatementsRepository: InMemoryStatementsRepository;
let createStatementUseCase: CreateStatementUseCase;

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create statement", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    inMemoryStatementsRepository = new InMemoryStatementsRepository();
    createStatementUseCase = new CreateStatementUseCase(inMemoryUsersRepository, inMemoryStatementsRepository);
  });

  it("should be able to deposit", async () => {
    const user = await createUserUseCase.execute({
      name: "User test",
      email: "test@example.com",
      password: "123"
    });

    const { id } = user;

    const statement: ICreateStatementDTO = {
      user_id: id as string,
      amount: 900.00,
      description: "PIX",
      type: OperationType.DEPOSIT
    }

    await createStatementUseCase.execute(statement);

    expect(statement).toHaveProperty("amount");
    expect(statement.amount).toBe(900.00);
    expect(statement).toHaveProperty("type");
    expect(statement.type).toBe("deposit");
  });

  it("should not be able to deposit or withdraw when user does not exists", async () => {
    expect(async () => {
      await createStatementUseCase.execute({
        user_id: "user_unknown",
        amount: 100.00,
        description: "PIX",
        type: OperationType.DEPOSIT
      });
    }).rejects.toBeInstanceOf(CreateStatementError.UserNotFound);
  });

  it("should be able to withdraw when enough balance", async () => {
    const user = await createUserUseCase.execute({
      name: "User test",
      email: "test@example.com",
      password: "123"
    });

    const { id } = user;

    await createStatementUseCase.execute({
      user_id: id as string,
      amount: 100.00,
      description: "PIX",
      type: OperationType.DEPOSIT
    });

    const statement = await createStatementUseCase.execute({
      user_id: id as string,
      amount: 50.00,
      description: "Withdraw to pay bills",
      type: OperationType.WITHDRAW
    });

    expect(statement).toBeTruthy();
    expect(statement?.amount).toBe(50.00);
    expect(statement).toHaveProperty("description");
  });

  it("should not be able to withdraw when insufficient balance", async () => {
    expect(async () => {
      const user = await createUserUseCase.execute({
        name: "User test",
        email: "test@example.com",
        password: "123"
      });

      const { id } = user;

      await createStatementUseCase.execute({
        user_id: id as string,
        amount: 100.00,
        description: "PIX",
        type: OperationType.DEPOSIT
      });

      await createStatementUseCase.execute({
        user_id: id as string,
        amount: 200.00,
        description: "Withdraw to pay bills",
        type: OperationType.WITHDRAW
      });
    }).rejects.toBeInstanceOf(CreateStatementError.InsufficientFunds);
  });

  it("should be able to transfer to another existent user", async () => {
    const user_1 = await createUserUseCase.execute({
      name: "User test 1",
      email: "test1@example.com",
      password: "123"
    });

    const user_2 = await createUserUseCase.execute({
      name: "User test 2",
      email: "test2@example.com",
      password: "123"
    });

    const { id: user_1_id } = user_1;
    const { id: user_2_id } = user_2;

    await createStatementUseCase.execute({
      user_id: user_1_id as string,
      amount: 100.00,
      description: "PIX",
      type: OperationType.DEPOSIT
    });

    const statement_recipient = await createStatementUseCase.execute({
      user_id: user_1_id as string,
      amount: 50.00,
      description: "PIX",
      type: OperationType.TRANSFER,
      recipient_id: user_2_id,
      sender_id: user_1_id
    });

    expect(statement_recipient?.sender_id).toBe(user_1_id);
    expect(statement_recipient?.type).toEqual("transfer");
  });

  it("should not be able to transfer to an non-existent user", async () => {
    expect(async () => {
      const user = await createUserUseCase.execute({
        name: "User test 1",
        email: "test1@example.com",
        password: "123"
      });

      const { id } = user;

      await createStatementUseCase.execute({
        user_id: id as string,
        amount: 100.00,
        description: "PIX",
        type: OperationType.DEPOSIT
      });

      await createStatementUseCase.execute({
        user_id: id as string,
        amount: 50.00,
        description: "PIX",
        type: OperationType.TRANSFER,
        recipient_id: "non existing recipient",
        sender_id: id
      });
    }).rejects.toBeInstanceOf(CreateStatementError.UserNotFound);
  });

  it("should not be able to transfer to another user when insufficient balance", async () => {
    expect(async () => {
      const user_1 = await createUserUseCase.execute({
        name: "User test 1",
        email: "test1@example.com",
        password: "123"
      });

      const user_2 = await createUserUseCase.execute({
        name: "User test 2",
        email: "test2@example.com",
        password: "123"
      });

      const { id: user_1_id } = user_1;
      const { id: user_2_id } = user_2;

      await createStatementUseCase.execute({
        user_id: user_1_id as string,
        amount: 100.00,
        description: "PIX",
        type: OperationType.DEPOSIT
      });

      await createStatementUseCase.execute({
        user_id: user_1_id as string,
        amount: 200.00,
        description: "PIX",
        type: OperationType.TRANSFER,
        recipient_id: user_2_id,
        sender_id: user_1_id
      });
    }).rejects.toBeInstanceOf(CreateStatementError.InsufficientFunds);
  });
});
