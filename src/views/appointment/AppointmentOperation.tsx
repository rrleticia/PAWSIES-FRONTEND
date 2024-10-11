import Box from "@mui/material/Box";
import { InputBox, SelectBox, SideInputBox } from "../../components";
import {
  examinationOptions,
  formatDate,
  IAppointment,
  IAppointmentHookJson,
  SelectType,
  statusOptions,
  useAppointmentContext,
  useAppointmentForm,
  useInputMask,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import {
  AppointmentService,
  OwnerService,
  PetService,
  VetService,
} from "../../services";
import { OperationPage } from "../../layouts";
import { useEffect, useMemo, useState } from "react";

export const AppointmentOperation = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const {
    formData,
    handleFormData,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  } = useAppointmentForm();

  return (
    <OperationPage<IAppointment>
      minHeight={minHeight}
      route={"appointment"}
      contextHook={useAppointmentContext}
      operationForm={{
        formData,
        handleFormData,
        errors,
        handleInputChange,
        verifyErrors,
        resetForm,
      }}
      children={
        <AppointmentInput
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        ></AppointmentInput>
      }
      service={AppointmentService}
    ></OperationPage>
  );
};

interface IAppointmentInputProps {
  formData: IAppointmentHookJson;
  handleInputChange: (event: any) => void;
  errors: any;
}

const AppointmentInput: React.FC<IAppointmentInputProps> = ({
  formData,
  handleInputChange,
  errors,
}) => {
  const { operation } = useAppointmentContext();
  const { dateRef, hourRef } = useInputMask();

  const disabled: boolean = useMemo(() => operation == "VIEW", [operation]);

  const [petsOptions, setPetsOptions] = useState<SelectType[]>([]);
  const [ownersOptions, setOwnersOptions] = useState<SelectType[]>([]);
  const [vetsOptions, setVetsOptions] = useState<SelectType[]>([]);

  const fetchDataPet = async () => {
    try {
      const result = await PetService.getAll();
      if (result instanceof Error) {
        console.error("Erro ao buscar dados dos pets", result);
      } else {
        const listed = result.map((r: any) => ({
          label: r.name,
          value: r.id,
        }));
        setPetsOptions(listed);
      }
    } catch (error) {
      console.error("Erro inesperado ao buscar dados", error);
    }
  };

  const fetchDataOwner = async () => {
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

  const fetchDataVet = async () => {
    try {
      const result = await VetService.getAll();
      if (result instanceof Error) {
        console.error("Erro ao buscar dados dos vets", result);
      } else {
        const listed = result.map((r: any) => ({
          label: r.username,
          value: r.vetID,
        }));
        setVetsOptions(listed);
      }
    } catch (error) {
      console.error("Erro inesperado ao buscar dados", error);
    }
  };

  useEffect(() => {
    fetchDataPet();
    fetchDataOwner();
    fetchDataVet();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            inputRef={dateRef}
            name={"date"}
            label={"DATE"}
            value={formData.date}
            hasError={Boolean(errors.date)}
            errorText={errors.date || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            inputRef={hourRef}
            name={"hour"}
            label={"HOUR"}
            value={formData.hour}
            hasError={Boolean(errors.hour)}
            errorText={errors.hour || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <SelectBox
            name={"petID"}
            label={"PET"}
            value={formData.petID}
            hasError={Boolean(errors.petID)}
            errorText={errors.petID || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={petsOptions}
          ></SelectBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"observations"}
            label={"OBSERVATIONS"}
            value={formData.observations}
            hasError={Boolean(errors.observations)}
            errorText={errors.observations || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <SelectBox
            name={"examination"}
            label={"EXAMINATION"}
            value={formData.examination}
            hasError={Boolean(errors.examination)}
            errorText={errors.examination || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={examinationOptions}
          ></SelectBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <SelectBox
            name={"status"}
            label={"STATUS"}
            value={formData.status}
            hasError={Boolean(errors.status)}
            errorText={errors.status || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={statusOptions}
          ></SelectBox>
        </SideInputBox>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
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
        <SideInputBox side={"right"}>
          <SelectBox
            name={"vetID"}
            label={"VET"}
            value={formData.vetID}
            hasError={Boolean(errors.vetID)}
            errorText={errors.vetID || ""}
            handleChange={handleInputChange}
            disabled={disabled}
            options={vetsOptions}
          ></SelectBox>
        </SideInputBox>
      </Box>
    </>
  );
};
