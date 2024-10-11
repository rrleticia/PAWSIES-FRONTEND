import { SelectType } from "../type";

export const statusOptions: SelectType[] = [
  { value: "CONFIRMED", label: "CONFIRMED" },
  { value: "COMPLETED", label: "COMPLETED" },
  { value: "CANCELLED", label: "CANCELLED" },
  { value: "SCHEDULED", label: "SCHEDULED" },
  { value: "RESCHEDULED", label: "RESCHEDULED" },
  { value: "NO_SHOW", label: "NO_SHOW" },
  { value: "IN_PROGRESS", label: "IN_PROGRESS" },
];
