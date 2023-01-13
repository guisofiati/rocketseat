import { UserRepositoryInMemory } from "@modules/account/repositories/in-memory/UserRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/account/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;

describe("Send forgot mail", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    dateProvider = new DayjsDateProvider();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      userRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider,
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await userRepositoryInMemory.create({
      driver_license: "072918",
      email: "kob@mu.kh",
      name: "Arthur Robbins",
      password: "123",
    });

    await sendForgotPasswordMailUseCase.execute("kob@mu.kh");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send a forgot password mail if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("ibu@fobitup.lk"),
    ).rejects.toEqual(new AppError("User does not exists"));
  });

  it("should be able to create an user token", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create",
    );

    await userRepositoryInMemory.create({
      driver_license: "771309237",
      email: "tihtefzit@puli.ly",
      name: "Benjamin Ramirez",
      password: "123",
    });

    await sendForgotPasswordMailUseCase.execute("tihtefzit@puli.ly");

    expect(generateTokenMail).toBeCalled();
  });
});
