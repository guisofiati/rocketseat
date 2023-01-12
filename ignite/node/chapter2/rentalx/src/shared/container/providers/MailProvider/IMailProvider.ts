interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string,
  ): Promise<void>;
}

export { IMailProvider };
// eslint-disable-next-line prettier/prettier
