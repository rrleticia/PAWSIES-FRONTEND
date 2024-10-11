import Box from "@mui/material/Box";
import { InputBox, SelectBox, SideInputBox } from "../../components";
import {
  IOwner,
  IPet,
  IPetHookJson,
  petTypeOptions,
  SelectType,
  usePetContext,
  usePetForm,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import { OwnerService, PetService } from "../../services";
import { OperationPage } from "../../layouts";
import { useEffect, useMemo, useState } from "react";

export const PetOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const {
    formData,
    handleFormData,
    errors,
    handleInputChange,
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

  const [ownersOptions, setOwnersOptions] = useState<SelectType[]>([]);

  const fetchData = async () => {
    try {
      const result = await OwnerService.getAll();
      if (result instanceof Error) {
        console.error("Erro ao buscar dados dos owners", result);
      } else {
        const listed = result.map((r: any) => ({
          label: r.username,
          value: r.ownerID,
        }));
        setOwnersOptions(listed);
      }
    } catch (error) {
      console.error("Erro inesperado ao buscar dados", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            name={"ownerID"}
            label={"OWNER"}
            value={formData.ownerID}
            hasError={Boolean(errors.ownerID)}
            errorText={errors.ownerID || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={ownersOptions}
          ></SelectBox>
        </SideInputBox>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
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
        <SideInputBox side={"right"}>
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
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
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
        <SideInputBox side={"none"}>
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
