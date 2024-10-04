import Box from "@mui/material/Box";
import { InputBox, OperationPage, SideInputBox } from "../../components";
import { IOwner } from "../../models";
import { useOwnerContext } from "../../shared";
import { useTheme } from "@mui/material/styles";
import { OwnerService } from "../../services";
import { IOwnerHookJson, useOwnerForm } from "../../shared/hooks/forms";

export const OwnerOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;
  const { formData, errors, handleInputChange } = useOwnerForm();

  return (
    <OperationPage<IOwner>
      minHeight={minHeight}
      route={"owner"}
      contextHook={useOwnerContext}
      operationForm={useOwnerForm}
      children={
        <OwnerInput
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        ></OwnerInput>
      }
      service={OwnerService}
    ></OperationPage>
  );
};

interface IOwnerInputProps {
  formData: IOwnerHookJson;
  handleInputChange: (event: any) => void;
  errors: any;
}

const OwnerInput: React.FC<IOwnerInputProps> = ({
  formData,
  handleInputChange,
  errors,
}) => {
  return (
    <>
      <InputBox
        name={"name"}
        label={"NAME"}
        value={formData.name}
        hasError={Boolean(errors.name)}
        errorText={errors.name || ""}
        handleChange={handleInputChange}
      ></InputBox>
      <InputBox
        name={"email"}
        label={"E-MAIL"}
        value={formData.email}
        hasError={Boolean(errors.email)}
        errorText={errors.email || ""}
        handleChange={handleInputChange}
      ></InputBox>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            name={"username"}
            label={"USERNAME"}
            value={formData.username}
            hasError={Boolean(errors.username)}
            errorText={errors.username || ""}
            handleChange={handleInputChange}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"password"}
            label={"PASSWORD"}
            value={formData.password}
            hasError={Boolean(errors.password)}
            errorText={errors.password || ""}
            handleChange={handleInputChange}
          ></InputBox>
        </SideInputBox>
      </Box>
    </>
  );
};
