import Box from "@mui/material/Box";
import { InputBox, OperationPage, SideInputBox } from "../../components";
import { IOwner } from "../../models";
import { useOwnerContext } from "../../shared";
import { useTheme } from "@mui/material/styles";

export const OwnerOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;
  return (
    <OperationPage<IOwner>
      minHeight={minHeight}
      route={"owner"}
      contextHook={useOwnerContext}
      children={<OwnerInput></OwnerInput>}
    ></OperationPage>
  );
};

interface IOwnerInputProps {}

const OwnerInput: React.FC<IOwnerInputProps> = ({}) => {
  return (
    <>
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
        </SideInputBox>{" "}
      </Box>
    </>
  );
};
