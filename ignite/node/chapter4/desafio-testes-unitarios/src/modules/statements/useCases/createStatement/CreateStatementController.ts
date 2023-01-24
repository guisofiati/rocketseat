import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateStatementUseCase } from './CreateStatementUseCase';

enum OperationType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  TRANSFER = 'transfer',
}

export class CreateStatementController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { amount, description } = request.body;

    const splittedPath = request.originalUrl.split('/')
    const type = splittedPath[splittedPath.length - 1] as OperationType;

    const createStatement = container.resolve(CreateStatementUseCase);

    const statementData = {
      user_id,
      type,
      amount,
      description
    };

    if (type === 'transfer') {
      const { user_id: recipient_id } = request.params;
      Object.assign(statementData, { recipient_id});
      Object.assign(statementData, { sender_id: user_id });
    }

    const statement = await createStatement.execute(statementData);

    return response.status(201).json(statement);
  }
}
