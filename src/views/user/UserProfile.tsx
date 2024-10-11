import Box from "@mui/material/Box";
import { InputBox, SideInputBox } from "../../components";
import {
  IUser,
  IUserHookJson,
  useUserContext,
  useUserForm,
} from "../../shared";
import { useTheme } from "@mui/material/styles";
import { UserService } from "../../services";
import { ProfilePage } from "../../layouts";
import { useMemo } from "react";

export const UserProfile = () => {
  const theme = useTheme();
  const minHeight = `calc(100% - ${theme.spacing(4)})`;

  const {
    formData,
    handleFormData,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  } = useUserForm();

  return (
    <ProfilePage<IUser>
      minHeight={minHeight}
      route={"user"}
      contextHook={useUserContext}
      operationForm={{
        formData,
        handleFormData,
        errors,
        handleInputChange,
        verifyErrors,
        resetForm,
      }}
      children={
        <UserInput
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        ></UserInput>
      }
      service={UserService}
    ></ProfilePage>
  );
};

interface IUserInputProps {
  formData: IUserHookJson;
  handleInputChange: (event: any) => void;
  errors: any;
}

const UserInput: React.FC<IUserInputProps> = ({
  formData,
  handleInputChange,
  errors,
}) => {
  const { operation } = useUserContext();

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
          <InputBox
            name={"role"}
            label={"ROLE"}
            value={formData.role}
            hasError={false}
            errorText={""}
            handleChange={() => {}}
            disabled={true}
          ></InputBox>
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
