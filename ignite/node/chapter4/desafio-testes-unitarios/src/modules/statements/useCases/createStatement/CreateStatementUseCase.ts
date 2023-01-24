import { IStatementsRepository } from "@modules/statements/repositories/IStatementsRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { CreateStatementError } from "./CreateStatementError";
import { ICreateStatementDTO } from "./ICreateStatementDTO";

@injectable()
export class CreateStatementUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StatementsRepository')
    private statementsRepository: IStatementsRepository
  ) {}

  async #verifyIfUserExists(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new CreateStatementError.UserNotFound();
    }
  }

  async #verifyIfBalanceIsEnough(user_id: string, amount: number) {

    const { balance } = await this.statementsRepository.getUserBalance({ user_id });

    if (balance < amount) {
      throw new CreateStatementError.InsufficientFunds()
    }
  }

  async execute({ user_id, sender_id, recipient_id, type, amount, description }: ICreateStatementDTO) {
    this.#verifyIfUserExists(user_id);

    if(type === 'withdraw' || type === 'transfer') {
      this.#verifyIfBalanceIsEnough(user_id, amount);
    }

    if (type === 'withdraw') {

      const statementOperation = await this.statementsRepository.create({
        user_id,
        type,
        amount,
        description
      });

      return statementOperation;
    }

    if (type === 'transfer') {
      this.#verifyIfUserExists(recipient_id!);

      const statementOperation = await this.statementsRepository.create({
        user_id,
        sender_id,
        recipient_id,
        type,
        amount: amount * -1, // e.g: (30 * -1 = -30);
        description
      });

      await this.statementsRepository.create({
        user_id: recipient_id!,
        sender_id,
        recipient_id,
        type,
        amount,
        description
      });

      return statementOperation;
    }

  }
}
