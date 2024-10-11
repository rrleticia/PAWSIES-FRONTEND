import Box from "@mui/material/Box";
import { InputBox, SideInputBox } from "../../components";
import {
  IOwner,
  IOwnerHookJson,
  useOwnerContext,
  useOwnerForm,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import { OwnerService } from "../../services";
import { OperationPage } from "../../layouts";
import { useMemo } from "react";

export const OwnerOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const {
    formData,
    handleFormData,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  } = useOwnerForm();

  return (
    <OperationPage<IOwner>
      minHeight={minHeight}
      route={"owner"}
      contextHook={useOwnerContext}
      operationForm={{
        formData,
        handleFormData,
        errors,
        handleInputChange,
        verifyErrors,
        resetForm,
      }}
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
  const { operation } = useOwnerContext();

  const disabled: boolean = useMemo(() => operation == "VIEW", [operation]);

  return (
    <>
      <InputBox
        name={"name"}
        label={"NAME"}
        value={formData.name}
        hasError={Boolean(errors.name)}
        errorText={errors.name || ""}
        handleChange={handleInputChange}
        disabled={disabled}
      ></InputBox>
      <InputBox
        name={"email"}
        label={"E-MAIL"}
        value={formData.email}
        hasError={Boolean(errors.email)}
        errorText={errors.email || ""}
        handleChange={handleInputChange}
        disabled={disabled}
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
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"password"}
            label={"PASSWORD"}
            value={formData.password ?? ""}
            hasError={Boolean(errors.password)}
            errorText={errors.password || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>
    </>
  );
};
