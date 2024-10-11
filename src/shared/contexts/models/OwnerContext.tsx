
import { createContext, useContext, useState } from "react";
import { OperationType } from "../../interfaces";

interface IOwnerContextData {
  id: string | "NONE";
  operation: OperationType | "NONE";
  handleIDChange: (value: string | "NONE") => void;
  handleOperationChange: (value: OperationType | "NONE") => void;
  resetDefault: () => void;
}

const OwnerContext = createContext({} as IOwnerContextData);

interface IOwnerProviderProps {
  children: React.ReactNode;
}

export const OwnerProvider: React.FC<IOwnerProviderProps> = ({ children }) => {
  const [currentID, setCurrentID] = useState<string | "NONE">("NONE");
  const [currentOperation, setCurrentOperation] = useState<
    OperationType | "NONE"
  >("NONE");

  const resetDefault = (): void => {
    setCurrentID("NONE");
    setCurrentOperation("NONE");
  };

  return (
    <OwnerContext.Provider
      value={{
        id: currentID,
        operation: currentOperation,
        handleIDChange: setCurrentID,
        handleOperationChange: setCurrentOperation,
        resetDefault,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwnerContext = () => useContext(OwnerContext);
