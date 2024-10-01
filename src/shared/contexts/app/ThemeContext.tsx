import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../../theme";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <Box bgcolor={Theme.palette.background.default}>{children}</Box>
    </ThemeProvider>
  );
};
