import { Role, Specialty } from "../shared";

export interface IVet {
  id: string;
  name: string;
  specialty: Specialty | null;
  role: Role;
  username: string;
  email: string;
  password?: string;
  vetID?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
