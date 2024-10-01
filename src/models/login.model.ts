import { Role } from "../shared";

export interface ILoginUser {
  role: Role;
  email: string;
  password?: string;
}
