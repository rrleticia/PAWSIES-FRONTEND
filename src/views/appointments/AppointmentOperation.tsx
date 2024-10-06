import Box from "@mui/material/Box";
import { InputBox, SideInputBox } from "../../components";
import {
  IAppointment,
  IAppointmentHookJson,
  useAppointmentContext,
  useAppointmentForm,
  useInputMask,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import { AppointmentService } from "../../services";
import { OperationPage } from "../../layouts";
import { useMemo } from "react";

export const AppointmentOperation = () => {
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
  } = useAppointmentForm();

  return (
    <OperationPage<IAppointment>
      minHeight={minHeight}
      route={"Appointment"}
      contextHook={useAppointmentContext}
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
  const { dateRef } = useInputMask();

  const disabled: boolean = useMemo(() => operation == "VIEW", [operation]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            inputRef={dateRef}
            name={"date"}
            label={"DATE"}
            value={formData.date}
            hasError={Boolean(errors.name)}
            errorText={errors.name || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            inputRef={dateRef}
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
          <InputBox
            name={"examination"}
            label={"EXAMINATION"}
            value={formData.examination}
            hasError={Boolean(errors.examination)}
            errorText={errors.examination || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
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
          <InputBox
            name={"status"}
            label={"STATUS"}
            value={formData.status}
            hasError={Boolean(errors.status)}
            errorText={errors.status || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"petID"}
            label={"PETID"}
            value={formData.petID}
            hasError={Boolean(errors.petID)}
            errorText={errors.petID || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideInputBox side={"left"}>
          <InputBox
            name={"ownerID"}
            label={"OWNERID"}
            value={formData.ownerID}
            hasError={Boolean(errors.ownerID)}
            errorText={errors.ownerID || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
        <SideInputBox side={"right"}>
          <InputBox
            name={"vetID"}
            label={"VETID"}
            value={formData.vetID}
            hasError={Boolean(errors.vetID)}
            errorText={errors.vetID || ""}
            handleChange={handleInputChange}
            disabled={disabled}
          ></InputBox>
        </SideInputBox>
      </Box>
    </>
  );
};
