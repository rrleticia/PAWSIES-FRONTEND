import { FooterBrand, NavAppBar } from "../../components";
import { Outlet } from "react-router-dom";
import {
  AppBarProvider,
  AppointmentProvider,
  OwnerProvider,
  PetProvider,
  space,
  VetProvider,
} from "../../shared";
import Box from "@mui/material/Box";

export const HomeOutlet = () => {
  const minHeight = `calc(100vh - 2 * ${space.four_half_space})`;
  return (
    <AppBarProvider>
      <OwnerProvider>
        <VetProvider>
          <PetProvider>
            <AppointmentProvider>
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
            </AppointmentProvider>
          </PetProvider>
        </VetProvider>
      </OwnerProvider>
    </AppBarProvider>
  );
};
