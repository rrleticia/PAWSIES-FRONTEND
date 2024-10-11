import { OperationType } from "../../interfaces";

export const validOperation = (
  id: string | "NONE",
  operation: OperationType | "NONE"
): boolean => {
  if (operation == "NONE") return false;
  else if (operation == "REGISTER" && id != "NONE") return false;
  else if (operation != "REGISTER" && id == "NONE") return false;

  return true;
};
