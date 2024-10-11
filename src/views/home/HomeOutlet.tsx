import { FooterBrand, NavAppBar } from "../../components";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBarProvider,
  AppointmentProvider,
  OwnerProvider,
  PetProvider,
  space,
  useAuthContext,
  VetProvider,
} from "../../shared";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export const HomeOutlet = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  const minHeight = `calc(100vh - 2 * ${space.four_half_space})`;

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

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
                  <Box
                    sx={{ display: "flex", flex: 1, flexDirection: "column" }}
                  >
                    <Outlet />
                  </Box>
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
