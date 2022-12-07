import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/account/repositories/IUserRepository";
import { deleteFile } from "@utils/file";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(@inject("UserRepository") private repository: IUsersRepository) { }
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.repository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./temp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.repository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
// eslint-disable-next-line prettier/prettier

