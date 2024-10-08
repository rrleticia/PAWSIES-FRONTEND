import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks";
import { IUser } from "../../models";

interface IUserContextData {
  loginStatus: boolean;
  user: IUser | undefined;
  changeUser: (user: IUser | undefined) => void;
  operation: "VIEW" | "EDIT";
  handleOperationChange: (value: "VIEW" | "EDIT") => void;
  resetDefault: () => void;
}

const UserContext = createContext({} as IUserContextData);

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const { currentUser, handleUserChange } = useCurrentUser();

  const [currentOperation, setCurrentOperation] = useState<"VIEW" | "EDIT">(
    "VIEW"
  );

  const resetDefault = (): void => {
    setCurrentOperation("VIEW");
  };

  useEffect(() => {
    if (currentUser) {
      setLoginStatus(true);
    } else setLoginStatus(false);
  }, [currentUser, handleUserChange]);

  return (
    <UserContext.Provider
      value={{
        loginStatus,
        user: currentUser,
        changeUser: handleUserChange,
        operation: currentOperation,
        handleOperationChange: setCurrentOperation,
        resetDefault,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
