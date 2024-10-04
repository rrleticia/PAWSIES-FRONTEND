import { UserModel } from "./user.model";
import { LoginModel } from "./login.model";
import { OwnerModel } from "./owner.models";
import { VetModel } from "./vet.model";
import { PetModel } from "./pet.model";
import { AppointmentModel } from "./appointment.model";

export const Validators = {
  UserSchema: UserModel,
  LoginSchema: LoginModel,
  OwnerSchema: OwnerModel,
  VetSchema: VetModel,
  PetSchema: PetModel,
  AppointmentSchema: AppointmentModel,
};
