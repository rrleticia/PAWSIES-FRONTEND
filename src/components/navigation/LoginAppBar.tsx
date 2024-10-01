import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material";
import { space, useAppBarContext } from "../../shared";
import { Logo } from "../logo";
import { useLayoutEffect, useRef } from "react";

interface ILoginAppBarProps {}

export const LoginAppBar: React.FC<ILoginAppBarProps> = ({}) => {
  const theme = useTheme();

  const myRef = useRef<HTMLDivElement>(null);
  const { handleHeight } = useAppBarContext();

  useLayoutEffect(() => {
    if (myRef.current) {
      const componentHeight = myRef.current.offsetHeight;
      handleHeight(componentHeight);
    }
  }, []);

  return (
    <>
      <AppBar
        ref={myRef}
        elevation={0}
        style={{
          width: "100%",
          position: "sticky",
        }}
        sx={{
          display: "flex",

          backgroundColor: "background.paper",

          borderTopLeftRadius: theme.spacing(2),
          borderTopRightRadius: theme.spacing(2),
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            padding: space.two_space,
          }}
        >
          <Logo />
        </Toolbar>
      </AppBar>
    </>
  );
};
