import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks";
import { validateExpireStoredStringDate } from "../../util";
import { AuthService } from "../../../services";
import { useUserContext } from "./UserConext";

interface IAuthContextData {
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  access_token: string | undefined;
  set_access_token: (value: string | undefined) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const KEY_ACCESS_TOKE = "APP_ACCESS_TOKEN";
const KEY_EXPIRE_DATE = "APP_ACCESS_TOKEN_EXPIRE_DATE";
const KEY_CURRENT_USER = "APP_CURRENT_USER";
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const { changeUser } = useUserContext();

  const [accessToken, setAccessToken] = useState<string>();

  const isAuthenticated = useMemo(() => {
    return !!accessToken;
  }, [accessToken]);

  useEffect(() => {
    const sessionAccessToken = sessionStorage.getItem(KEY_ACCESS_TOKE);
    const sessionExpireDate = sessionStorage.getItem(KEY_EXPIRE_DATE);
    const storedUserSession = sessionStorage.getItem(KEY_CURRENT_USER);
    if (sessionAccessToken && sessionExpireDate) {
      if (validateExpireStoredStringDate(sessionExpireDate)) {
        setAccessToken(JSON.parse(sessionAccessToken));
        if (storedUserSession) {
          changeUser(JSON.parse(storedUserSession));
          navigate("/home", { replace: true });
        }
      } else {
        navigate("/login", { replace: true });
        setAccessToken(undefined);
        sessionStorage.removeItem(KEY_CURRENT_USER);
      }
    }

    if (isAuthenticated) navigate("/home", { replace: true });
  }, [isAuthenticated, navigate]);

  const handleLogin = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const result = await AuthService.auth(username, password);
    if (result instanceof Error) {
      return false;
    }

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 31);

    changeUser(result.loggedUser);

    sessionStorage.setItem(KEY_ACCESS_TOKE, JSON.stringify(result.token));
    sessionStorage.setItem(KEY_EXPIRE_DATE, JSON.stringify(expireDate));
    sessionStorage.setItem(KEY_CURRENT_USER, JSON.stringify(result.loggedUser));

    setAccessToken(result.token);

    navigate("/home", { replace: true });
    return true;
  };

  const handleLogout = () => {
    sessionStorage.removeItem(KEY_ACCESS_TOKE);
    sessionStorage.removeItem(KEY_EXPIRE_DATE);
    sessionStorage.removeItem(KEY_CURRENT_USER);
    setAccessToken(undefined);
    changeUser(undefined);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        access_token: accessToken,
        set_access_token: setAccessToken,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
