import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../../../models";
import { useCurrentUser } from "../../hooks";

interface IUserContextData {
  loginStatus: boolean;
  user: IUser | undefined;
  changeUser: (user: IUser) => void;
}

const UserContext = createContext({} as IUserContextData);

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const { currentUser, handleUserChange } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      setLoginStatus(true);
    } else setLoginStatus(false);
  }, [currentUser, handleUserChange]);

  return (
    <UserContext.Provider
      value={{ loginStatus, user: currentUser, changeUser: handleUserChange }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
