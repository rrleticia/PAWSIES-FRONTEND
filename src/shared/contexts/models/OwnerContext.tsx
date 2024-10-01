export * from "./OwnerContext";
import { createContext, useContext, useState } from "react";
import { OperationType } from "../../interfaces";

interface IOwnerContextData {
  id: string | undefined;
  operation: OperationType | undefined;
  handleIDChange: (value: string | undefined) => void;
  handleOperationChange: (value: OperationType | undefined) => void;
  resetDefault: () => void;
}

const OwnerContext = createContext({} as IOwnerContextData);

interface IOwnerProviderProps {
  children: React.ReactNode;
}

export const OwnerProvider: React.FC<IOwnerProviderProps> = ({ children }) => {
  const [currentID, setCurrentID] = useState<string | undefined>();
  const [currentOperation, setCurrentOperation] = useState<
    OperationType | undefined
  >();

  const resetDefault = (): void => {
    setCurrentID(undefined);
    setCurrentOperation(undefined);
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
