import { getRepository, Repository } from 'typeorm';

import { IFindUserByFullNameDTO, IFindUserWithGamesDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository.createQueryBuilder("user")
    .leftJoinAndSelect("user.games", "game")
    .where("user.id = :id", { id: user_id})
    .getOne();
    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query("SELECT * FROM users ORDER BY first_name ASC");
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(`SELECT * FROM users WHERE CONCAT(LOWER(first_name), ' ', LOWER(last_name)) ILIKE '%${first_name} ${last_name}%'`);
  }
}
