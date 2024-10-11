import { IAppointment } from "../../models";

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

function formatDateToYYYYMMDD(dateObj: Date) {
  const year = dateObj.getUTCFullYear();
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const filterByDate = (
  appointments: IAppointment[],
  targetDate: string
) => {
  const [day, month, year] = targetDate.split("/");
  const formattedTargetDate = `${year}-${month}-${day}`;

  return appointments.filter((appointment) => {
    const appointmentDate = formatDateToYYYYMMDD(new Date(appointment.date)); // Convert to 'yyyy-mm-dd'
    return appointmentDate === formattedTargetDate; // Compare formatted dates
  });
};
