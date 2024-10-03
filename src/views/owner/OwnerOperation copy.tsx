import { useNavigate } from "react-router-dom";
import { space, useOwnerContext, validOperation } from "../../shared";
import { useEffect } from "react";
import {
  GreenCard,
  GreyCard,
  InputBox,
  RoundedFilledButton,
  RoundedSwitchButton,
  SideInputBox,
  UnderlinedTitle,
} from "../../components";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const OwnerOperation = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const { id, operation, handleIDChange, handleOperationChange, resetDefault } =
    useOwnerContext();

  useEffect(() => {
    if (!validOperation(id, operation)) {
      resetDefault();
      navigate(-1);
    }
  }, [handleIDChange, handleOperationChange]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginRight: space.three_space,
        }}
      >
        <GreenCard flexDirection={"column"} minHeight={minHeight} full={1}>
          <Typography
            variant={"h4"}
            sx={{
              display: "flex",

              marginY: space.two_half_space,

              paddingY: theme.spacing(2.5),
              paddingX: space.five_space,

              color: "primary.contrastText",
            }}
          >
            OPERATIONS
          </Typography>
          <Divider
            flexItem
            sx={{
              borderRightWidth: 4,
              color: "primary.contrastText",
              marginX: theme.spacing(2.5),
              marginBottom: theme.spacing(2.5),
            }}
          />
          <RoundedSwitchButton
            text={"VIEW"}
            filled={true}
            disabled={false}
          ></RoundedSwitchButton>
          <RoundedSwitchButton
            text={"REGISTER"}
            filled={false}
            disabled={false}
          ></RoundedSwitchButton>
          <RoundedSwitchButton
            text={"UPDATE"}
            filled={false}
            disabled={false}
          ></RoundedSwitchButton>
          <RoundedSwitchButton
            text={"DELETE"}
            filled={false}
            disabled={false}
          ></RoundedSwitchButton>
          <Divider
            flexItem
            sx={{
              borderRightWidth: 4,
              color: "primary.contrastText",
              marginX: theme.spacing(2.5),
              marginBottom: theme.spacing(2.5),
            }}
          />
          <RoundedFilledButton
            text={"CONFIRMAR"}
            width={"80%"}
          ></RoundedFilledButton>
          <RoundedFilledButton
            text={"CANCELAR"}
            width={"80%"}
          ></RoundedFilledButton>{" "}
          <RoundedFilledButton
            text={"VOLTAR"}
            width={"80%"}
          ></RoundedFilledButton>
        </GreenCard>
      </Box>

      <Box sx={{ width: "80%" }}>
        <GreyCard minHeight={minHeight}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              width: "100%",

              justifyContent: "center",
              alignItems: "center",

              marginTop: space.two_half_space,
              padding: space.five_space,
            }}
          >
            <UnderlinedTitle text={"OWNER"}></UnderlinedTitle>
            <InputBox
              text={"NAME"}
              value={""}
              hasError={false}
              errorText={""}
              handleChange={function (change: string): void {
                throw new Error("Function not implemented.");
              }}
            ></InputBox>{" "}
            <InputBox
              text={"E-MAIL"}
              value={""}
              hasError={false}
              errorText={""}
              handleChange={function (change: string): void {
                throw new Error("Function not implemented.");
              }}
            ></InputBox>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
              <SideInputBox side={"left"}>
                <InputBox
                  text={"USERNAME"}
                  value={""}
                  hasError={false}
                  errorText={""}
                  handleChange={function (change: string): void {
                    throw new Error("Function not implemented.");
                  }}
                ></InputBox>
              </SideInputBox>
              <SideInputBox side={"right"}>
                <InputBox
                  text={"PASSWORD"}
                  value={""}
                  hasError={false}
                  errorText={""}
                  handleChange={function (change: string): void {
                    throw new Error("Function not implemented.");
                  }}
                ></InputBox>
              </SideInputBox>
            </Box>
          </Box>
        </GreyCard>
      </Box>
    </Box>
  );
};
