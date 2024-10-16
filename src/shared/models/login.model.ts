import { IUser } from "./user.model";

export interface ILogin {
  token: string;
  loggedUser: IUser;
  expiresIn: string;
}
