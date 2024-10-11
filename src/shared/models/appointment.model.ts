import { IPet } from ".";
import { AppointmentStatus, Examination } from "../interfaces";

export interface IAppointment {
  id: string;
  date: Date;
  hour: string;
  status: AppointmentStatus;
  examination: Examination;
  observations: string;
  vetID: string;
  petID: string;
  ownerID: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  pet: IPet;
}
