import { createContext, useContext, useState } from "react";
import { OperationType } from "../../interfaces";

interface IAppointmentContextData {
  id: string | "NONE";
  operation: OperationType | "NONE";
  handleIDChange: (value: string | "NONE") => void;
  handleOperationChange: (value: OperationType | "NONE") => void;
  resetDefault: () => void;
}

const AppointmentContext = createContext({} as IAppointmentContextData);

interface IAppointmentProviderProps {
  children: React.ReactNode;
}

export const AppointmentProvider: React.FC<IAppointmentProviderProps> = ({ children }) => {
  const [currentID, setCurrentID] = useState<string | "NONE">("NONE");
  const [currentOperation, setCurrentOperation] = useState<
    OperationType | "NONE"
  >("NONE");

  const resetDefault = (): void => {
    setCurrentID("NONE");
    setCurrentOperation("NONE");
  };

  return (
    <AppointmentContext.Provider
      value={{
        id: currentID,
        operation: currentOperation,
        handleIDChange: setCurrentID,
        handleOperationChange: setCurrentOperation,
        resetDefault,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => useContext(AppointmentContext);
