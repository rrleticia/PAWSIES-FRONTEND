import { createContext, useContext, useState } from "react";
import { OperationType } from "../../interfaces";

interface IVetContextData {
  id: string | "NONE";
  operation: OperationType | "NONE";
  handleIDChange: (value: string | "NONE") => void;
  handleOperationChange: (value: OperationType | "NONE") => void;
  resetDefault: () => void;
}

const VetContext = createContext({} as IVetContextData);

interface IVetProviderProps {
  children: React.ReactNode;
}

export const VetProvider: React.FC<IVetProviderProps> = ({ children }) => {
  const [currentID, setCurrentID] = useState<string | "NONE">("NONE");
  const [currentOperation, setCurrentOperation] = useState<
    OperationType | "NONE"
  >("NONE");

  const resetDefault = (): void => {
    setCurrentID("NONE");
    setCurrentOperation("NONE");
  };

  return (
    <VetContext.Provider
      value={{
        id: currentID,
        operation: currentOperation,
        handleIDChange: setCurrentID,
        handleOperationChange: setCurrentOperation,
        resetDefault,
      }}
    >
      {children}
    </VetContext.Provider>
  );
};

export const useVetContext = () => useContext(VetContext);
