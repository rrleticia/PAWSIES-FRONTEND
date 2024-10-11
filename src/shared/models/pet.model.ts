import { PetType } from "../shared";

export interface IPet {
  id: string;
  name: string;
  age: number;
  type: PetType;
  breed: string;
  ownerID: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}
