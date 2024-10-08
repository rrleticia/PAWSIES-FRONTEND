import Box from "@mui/material/Box";
import { InputBox, SelectBox, SideInputBox } from "../../components";
import {
  IPet,
  IPetHookJson,
  petTypeOptions,
  usePetContext,
  usePetForm,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import { PetService } from "../../services";
import { OperationPage } from "../../layouts";
import { useMemo } from "react";

export const PetOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const {
    formData,
    handleFormData,
    errors,
    handleInputChange,
    handlePasswordInit,
    verifyErrors,
    resetForm,
  } = usePetForm();

  return (
    <OperationPage<IPet>
      minHeight={minHeight}
      route={"Pet"}
      contextHook={usePetContext}
      operationForm={{
        formData,
        handleFormData,
        errors,
        handleInputChange,
        handlePasswordInit,
        verifyErrors,
        resetForm,
      }}
      children={
        <PetInput
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        ></PetInput>
      }
      service={PetService}
    ></OperationPage>
  );
};

interface IPetInputProps {
  formData: IPetHookJson;
  handleInputChange: (event: any) => void;
  errors: any;
}

const PetInput: React.FC<IPetInputProps> = ({
  formData,
  handleInputChange,
  errors,
}) => {
  const { operation } = usePetContext();

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
            name={"type"}
            label={"TYPE"}
            value={formData.type}
            hasError={Boolean(errors.type)}
            errorText={errors.type || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={petTypeOptions}
          ></SelectBox>
        </SideInputBox>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            name={"breed"}
            label={"BREED"}
            value={formData.breed}
            hasError={Boolean(errors.breed)}
            errorText={errors.breed || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"color"}
            label={"COLOR"}
            value={formData.color}
            hasError={Boolean(errors.color)}
            errorText={errors.color || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            name={"age"}
            label={"AGE"}
            value={formData.age}
            hasError={Boolean(errors.age)}
            errorText={errors.age || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"weight"}
            label={"WEIGHT"}
            value={formData.weight}
            hasError={Boolean(errors.weight)}
            errorText={errors.weight || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>
    </>
  );
};
