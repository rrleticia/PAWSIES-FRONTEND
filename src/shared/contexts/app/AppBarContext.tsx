import { createContext, useContext, useState } from "react";

interface IAppBarContextData {
  height: Number;
  handleHeight: (value: Number) => void;
}

const AppBarContext = createContext({} as IAppBarContextData);

interface IAppBarProviderProps {
  children: React.ReactNode;
}

export const AppBarProvider: React.FC<IAppBarProviderProps> = ({
  children,
}) => {
  const [height, setHeight] = useState<Number>(0);

  return (
    <AppBarContext.Provider value={{ height, handleHeight: setHeight }}>
      {children}
    </AppBarContext.Provider>
  );
};

export const useAppBarContext = () => useContext(AppBarContext);
