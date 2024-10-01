import { FooterBrand, NavAppBar } from "../../components";
import { Outlet } from "react-router-dom";
import { AppBarProvider, OwnerProvider } from "../../shared";

export const HomeOutlet = () => {
  return (
    <AppBarProvider>
      <OwnerProvider>
        <NavAppBar />
        <Outlet />
        <FooterBrand />
      </OwnerProvider>
    </AppBarProvider>
  );
};
