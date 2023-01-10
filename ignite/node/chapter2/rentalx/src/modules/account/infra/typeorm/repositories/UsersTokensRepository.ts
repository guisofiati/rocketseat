import { getRepository, Repository } from "typeorm";

import { ICreateUserTokenDTO } from "@modules/account/dtos/ICreateUserTokenDTO";
import { IUsersTokenRepository } from "@modules/account/repositories/IUsersTokenRepository";

import { UserTokens } from "../entities/UserTokens";

class UsersTokensRepository implements IUsersTokenRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      expires_date,
      refresh_token,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
// eslint-disable-next-line prettier/prettier
