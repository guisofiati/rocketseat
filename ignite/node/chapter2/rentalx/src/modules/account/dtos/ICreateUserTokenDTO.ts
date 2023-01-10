interface ICreateUserTokenDTO {
  user_id: string;
  expires_date: Date;
  refresh_token: string;
}

export { ICreateUserTokenDTO };
// eslint-disable-next-line prettier/prettier
