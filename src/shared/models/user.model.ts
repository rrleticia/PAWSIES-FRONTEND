import { Role } from "../shared";

export interface IUser {
  id: string;
  name: string;
  role: Role;
  username: string;
  email: string;
  password?: string;
  vetID?: string | null;
  ownerID?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}
