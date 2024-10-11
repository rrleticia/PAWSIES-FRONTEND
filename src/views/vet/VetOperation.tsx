import Box from "@mui/material/Box";
import { InputBox, SelectBox, SideInputBox } from "../../components";
import {
  IVet,
  IVetHookJson,
  specialtyOptions,
  useVetContext,
  useVetForm,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import { VetService } from "../../services";
import { OperationPage } from "../../layouts";
import { useMemo } from "react";

export const VetOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const {
    formData,
    handleFormData,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  } = useVetForm();

  return (
    <OperationPage<IVet>
      minHeight={minHeight}
      route={"Vet"}
      contextHook={useVetContext}
      operationForm={{
        formData,
        handleFormData,
        errors,
        handleInputChange,

        verifyErrors,
        resetForm,
      }}
      children={
        <VetInput
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        ></VetInput>
      }
      service={VetService}
    ></OperationPage>
  );
};

interface IVetInputProps {
  formData: IVetHookJson;
  handleInputChange: (event: any) => void;
  errors: any;
}

const VetInput: React.FC<IVetInputProps> = ({
  formData,
  handleInputChange,
  errors,
}) => {
  const { operation } = useVetContext();

  const disabled: boolean = useMemo(() => operation == "VIEW", [operation]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            name={"name"}
            label={"NAME"}
            value={formData.name}
            hasError={Boolean(errors.name)}
            errorText={errors.name || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <SelectBox
            name={"specialty"}
            label={"SPECIALTY"}
            value={formData.specialty}
            hasError={Boolean(errors.specialty)}
            errorText={errors.specialty || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={specialtyOptions}
          ></SelectBox>
        </SideInputBox>
      </Box>
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
