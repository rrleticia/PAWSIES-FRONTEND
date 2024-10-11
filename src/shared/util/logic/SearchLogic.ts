import { IAppointment, IPet } from "../../../models";
import { AppointmentService, PetService } from "../../../services";

export const search = async (
  id: string,
  route: string
): Promise<IAppointment[] | IPet[] | Error> => {
  if (route == "pet") {
    return await PetService.getAllByOwner(id);
  } else if (route == "appointment") {
    return await AppointmentService.getAllByPetID(id);
  } else {
    return new Error("Uknown error trying to search for something.");
  }
};
