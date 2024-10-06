import { createContext, useContext, useState } from "react";
import { OperationType } from "../../interfaces";

interface IPetContextData {
  id: string | "NONE";
  operation: OperationType | "NONE";
  handleIDChange: (value: string | "NONE") => void;
  handleOperationChange: (value: OperationType | "NONE") => void;
  resetDefault: () => void;
}

const PetContext = createContext({} as IPetContextData);

interface IPetProviderProps {
  children: React.ReactNode;
}

export const PetProvider: React.FC<IPetProviderProps> = ({ children }) => {
  const [currentID, setCurrentID] = useState<string | "NONE">("NONE");
  const [currentOperation, setCurrentOperation] = useState<
    OperationType | "NONE"
  >("NONE");

  const resetDefault = (): void => {
    setCurrentID("NONE");
    setCurrentOperation("NONE");
  };

  return (
    <PetContext.Provider
      value={{
        id: currentID,
        operation: currentOperation,
        handleIDChange: setCurrentID,
        handleOperationChange: setCurrentOperation,
        resetDefault,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
