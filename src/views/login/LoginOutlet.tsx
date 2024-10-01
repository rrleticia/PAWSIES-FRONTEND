import { Box } from "@mui/material";
import { LoginAppBar } from "../../components";
import { Outlet } from "react-router-dom";
import { AppBarProvider } from "../../shared";

export const LoginOutlet = () => {
  return (
    <AppBarProvider>
      <Box>
        <LoginAppBar />
        <Outlet />
      </Box>
    </AppBarProvider>
  );
};
