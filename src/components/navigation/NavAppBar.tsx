import * as React from "react";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useScrollTrigger, useTheme } from "@mui/material";
import { space, useAppBarContext } from "../../shared";
import { AppBarButton } from "../button";
import { useLayoutEffect, useRef } from "react";
import { Logo } from "../logo";
import { useNavigate } from "react-router-dom";

interface IHideOnScrollProps {
  style?: any;
  children?: React.ReactElement<any>;
}

export const HideOnScroll: React.FC<IHideOnScrollProps> = ({
  children,
  style,
}) => {
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger} style={style}>
      {children ?? <div />}
    </Slide>
  );
};

interface INavAppBarProps {}

export const NavAppBar: React.FC<INavAppBarProps> = ({}) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
      <HideOnScroll>
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
              padding: space.one_space,
              justifyContent: "center",
            }}
          >
            <Container
              sx={{
                display: "flex",
                width: "40%",
              }}
            >
              <AppBarButton
                text={"CLINIC"}
                handleClick={() => navigate("/home")}
              />
              <AppBarButton
                text={"APPOINTMENTS"}
                handleClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
              />
              <AppBarButton
                text={"VETS"}
                handleClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
              />
            </Container>

            <Container
              sx={{
                display: "flex",
                width: "20%",
                paddingX: space.two_half_space,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Logo />
            </Container>
            <Container
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "end",
              }}
            >
              <AppBarButton
                text={"PETS"}
                handleClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
              />
              <AppBarButton
                text={"OWNER"}
                handleClick={() => navigate("/owner")}
              />
              <AppBarButton
                text={"PROFILE"}
                handleClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
              />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
