import { AppointmentStatus, Examination } from "../shared";
import { IPet } from ".";

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
