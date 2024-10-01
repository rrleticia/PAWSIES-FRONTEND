import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserConext";

interface IAppContextData {}

const AppContext = createContext({} as IAppContextData);

export const AppProvider = ({}) => {
  return (
    <AppContext.Provider value={{}}>
      <UserProvider>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </UserProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
