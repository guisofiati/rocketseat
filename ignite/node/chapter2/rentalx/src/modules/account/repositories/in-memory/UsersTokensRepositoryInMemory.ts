import { ICreateUserTokenDTO } from "@modules/account/dtos/ICreateUserTokenDTO";
import { UserTokens } from "@modules/account/infra/typeorm/entities/UserTokens";

import { IUsersTokenRepository } from "../IUsersTokenRepository";

class UsersTokensRepositoryInMemory implements IUsersTokenRepository {
  usersTokens: UserTokens[] = [];

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    userId: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      ut => ut.user_id === userId && ut.refresh_token === refresh_token,
    );

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find(ut => ut.id === id);
    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      ut => ut.refresh_token === refresh_token,
    );

    return userToken;
  }
}

export { UsersTokensRepositoryInMemory };
// eslint-disable-next-line prettier/prettier
