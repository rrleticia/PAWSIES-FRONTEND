import { Role } from "../shared";

export interface IOwner {
  id: string;
  name: string;
  role: Role;
  username: string;
  email: string;
  password?: string;
  ownerID?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
