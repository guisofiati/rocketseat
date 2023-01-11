import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

interface IUsersTokenRepository {
  create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens>;

  findByUserIdAndRefreshToken(
    userId: string,
    refresh_token: string,
  ): Promise<UserTokens>;

  deleteById(id: string): Promise<void>;
}

export { IUsersTokenRepository };
// eslint-disable-next-line prettier/prettier
