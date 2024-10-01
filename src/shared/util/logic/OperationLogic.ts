import { OperationType } from "../../interfaces";

export const validOperation = (
  id: string | undefined,
  operation: OperationType | undefined
): boolean => {
  if (!operation) return false;
  else if (operation == "REGISTER" && id) return false;
  return true;
};
