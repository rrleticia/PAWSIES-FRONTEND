import { FooterBrand, NavAppBar } from "../../components";
import { Outlet } from "react-router-dom";
import { AppBarProvider, OwnerProvider, space } from "../../shared";
import Box from "@mui/material/Box";

export const HomeOutlet = () => {
  const minHeight = `calc(100vh - 2 * ${space.four_half_space})`;
  return (
    <AppBarProvider>
      <OwnerProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: minHeight,

            justifyContent: "space-between",
          }}
        >
          <>
            <NavAppBar />
            <Outlet />
          </>

          <FooterBrand />
        </Box>
      </OwnerProvider>
    </AppBarProvider>
  );
};
