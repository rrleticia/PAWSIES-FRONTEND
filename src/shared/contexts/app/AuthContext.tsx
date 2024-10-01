import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser, useRememberMe } from "../../hooks";
import { validateExpireStoredStringDate } from "../../util";

interface IAuthContextData {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  rememberMe: boolean;
  handleRememberMe: (rememberMe: boolean) => void;
}

const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const KEY_ACESSTOKEN = "APP_ACCESS_TOKEN";
const KEY_EXPIRE_DATE = "APP_ACCESS_TOKEN_EXPIRE_DATE";

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const { rememberMe, handleRememberMe } = useRememberMe();
  const { handleUserChange } = useCurrentUser();

  const [accessToken, setAccessToken] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const localAccessToken = localStorage.getItem(KEY_ACESSTOKEN);
    const localExpireDate = localStorage.getItem(KEY_EXPIRE_DATE);
    const storedUser = localStorage.getItem("CURRENT_USER");

    if (localAccessToken && localExpireDate) {
      if (validateExpireStoredStringDate(localExpireDate)) {
        setAccessToken(JSON.parse(localAccessToken));
        if (storedUser) {
          handleUserChange(JSON.parse(storedUser));
        }
      } else {
        setAccessToken(undefined);
        localStorage.removeItem("CURRENT_USER");
      }
    }

    const sessionAccessToken = sessionStorage.getItem(KEY_ACESSTOKEN);
    const sessionExpireDate = sessionStorage.getItem(KEY_EXPIRE_DATE);
    const storedUserSession = sessionStorage.getItem("CURRENT_USER");

    if (sessionAccessToken && sessionExpireDate) {
      if (validateExpireStoredStringDate(sessionExpireDate)) {
        setAccessToken(JSON.parse(sessionAccessToken));
        if (storedUserSession) {
          handleUserChange(JSON.parse(storedUserSession));
        }
      } else {
        setAccessToken(undefined);
        sessionStorage.removeItem("CURRENT_USER");
      }
    }
  }, [navigate, handleUserChange]);

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    // const result = await AuthService.auth(username, password);
    // if (result instanceof Error) {
    //   return true;
    // }
    const now = new Date();
    const expireDate = new Date(now.setMonth(now.getMonth() + 1));
    // setCurrentUser(result.user);
    // if (rememberMe) {
    //   sessionStorage.setItem(
    //     KEY_ACESSTOKEN,
    //     JSON.stringify(result.accessToken)
    //   );
    //   sessionStorage.setItem(KEY_EXPIRE_DATE, JSON.stringify(expireDate));
    //   sessionStorage.setItem('CURRENT_USER', JSON.stringify(result.user));

    //   localStorage.setItem(KEY_ACESSTOKEN, JSON.stringify(result.accessToken));
    //   localStorage.setItem(KEY_EXPIRE_DATE, JSON.stringify(expireDate));
    //   localStorage.setItem('CURRENT_USER', JSON.stringify(result.user));
    // } else {
    //   sessionStorage.setItem(
    //     KEY_ACESSTOKEN,
    //     JSON.stringify(result.accessToken)
    //   );
    //   sessionStorage.setItem(KEY_EXPIRE_DATE, JSON.stringify(expireDate));
    //   sessionStorage.setItem('CURRENT_USER', JSON.stringify(result.user));
    // }

    // setAccessToken(result.accessToken);

    setIsLoading(false);
    navigate("/home", { replace: true });
  };

  const handleLogout = useCallback(() => {
    localStorage.removeItem(KEY_ACESSTOKEN);
    localStorage.removeItem(KEY_EXPIRE_DATE);
    localStorage.removeItem("CURRENT_USER");
    sessionStorage.removeItem(KEY_ACESSTOKEN);
    sessionStorage.removeItem(KEY_EXPIRE_DATE);
    sessionStorage.removeItem("CURRENT_USER");
    setAccessToken(undefined);
    handleUserChange(undefined);
    navigate("/login", { replace: true });
  }, [navigate, handleUserChange]);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        isLoading,
        isAuthenticated,
        rememberMe,
        handleRememberMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
