import { ListPage } from "../../layouts";
import {
  appointmentColumns,
  IAppointment,
  useAppointmentContext,
} from "../../shared";
import { AppointmentService } from "../../services";

export const AppointmentList = () => {
  return (
    <ListPage<IAppointment>
      route={"appointment"}
      service={AppointmentService}
      columns={appointmentColumns}
      contextHook={useAppointmentContext}
    ></ListPage>
  );
};
