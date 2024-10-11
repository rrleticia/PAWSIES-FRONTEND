import { useNavigate } from "react-router-dom";
import {
  FormHookType,
  ModelOperation,
  OperationType,
  space,
  useAuthContext,
  useOperationDialog,
} from "../../shared";
import { useEffect, useState } from "react";
import {
  GreenCard,
  GreyCard,
  RoundedFilledButton,
  RoundedSwitchButton,
  UnderlinedTitle,
} from "../../components";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { OperationDialog } from "../operation-page/OperationDialog";

interface IProfilePageProps<T> {
  minHeight: string;
  route: string;
  service: any;
  contextHook: () => any;
  operationForm: FormHookType;
  children: React.ReactNode;
}

export const ProfilePage = <T,>({
  minHeight,
  route,
  service,
  contextHook,
  operationForm,
  children,
}: IProfilePageProps<T>) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const route_upper = route.toUpperCase();

  const { loginStatus, user, changeUser, operation, handleOperationChange } =
    contextHook();

  const { formData, handleFormData, verifyErrors, resetForm }: FormHookType =
    operationForm;

  const {
    openResult,
    toggleResult,
    openError,
    toggleError,
    errorMessage,
    handleMessageChange,
    openCancel,
    toggleCancel,
  } = useOperationDialog();

  const handleInit = async () => {
    const result = await service.getOne(user.id);
    if (result instanceof Error) {
    } else {
      handleFormData(result);
    }
  };

  useEffect(() => {
    if (loginStatus) handleInit();
    else navigate("/home");
  }, [changeUser, handleOperationChange]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (verifyErrors()) {
      const result = await ModelOperation(
        operation,
        service,
        user.id,
        formData
      );
      if (result instanceof Error) {
        handleMessageChange(result.message + ".");
        toggleError();
      } else {
        toggleResult();
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <OperationCard
          minHeight={minHeight}
          operation={operation}
          handleOperationChange={handleOperationChange}
          disabledExisting={loading}
          resetForm={resetForm}
          toggleCancel={toggleCancel}
        ></OperationCard>

        <InputCard
          minHeight={minHeight}
          route_upper={route_upper}
          children={children}
        ></InputCard>

        <OperationDialog
          model={route}
          operation={operation}
          description={errorMessage}
          openResult={openResult}
          toggleResult={toggleResult}
          openError={openError}
          toggleError={toggleError}
          openCancel={openCancel}
          toggleCancel={toggleCancel}
          handleCancelation={() => {
            resetForm();
            handleOperationChange("NONE");
            navigate("/home");
          }}
        ></OperationDialog>
      </Box>
    </form>
  );
};

interface IOperationCardProps {
  minHeight: string;
  operation: OperationType;
  handleOperationChange: (value: OperationType) => void;
  disabledExisting: boolean;
  resetForm: () => void;
  toggleCancel: () => void;
}

const OperationCard: React.FC<IOperationCardProps> = ({
  minHeight,
  operation,
  handleOperationChange,
  disabledExisting,
  resetForm,
  toggleCancel,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { logout } = useAuthContext();

  return (
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
          filled={operation == "VIEW"}
          disabled={disabledExisting}
          handleClick={() => {
            if (!disabledExisting) {
              handleOperationChange("VIEW");
            }
          }}
        ></RoundedSwitchButton>
        <RoundedSwitchButton
          text={"EDIT"}
          filled={operation == "EDIT"}
          disabled={disabledExisting}
          handleClick={() => {
            if (!disabledExisting) {
              handleOperationChange("EDIT");
            }
          }}
        ></RoundedSwitchButton>{" "}
        <RoundedSwitchButton
          text={"LOGOUT"}
          filled={true}
          disabled={false}
          handleClick={() => {
            logout();
          }}
        ></RoundedSwitchButton>
        <Box sx={{ display: "flex", flex: 1 }}></Box>
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
          text={operation == "VIEW" ? "VOLTAR" : "LIMPAR"}
          width={"80%"}
          handleClick={() => {
            resetForm();
            if (operation == "VIEW") navigate("/home");
          }}
        ></RoundedFilledButton>
        <RoundedFilledButton
          text={"CANCELAR"}
          width={"80%"}
          disabled={operation == "VIEW"}
          handleClick={() => {
            toggleCancel();
          }}
        ></RoundedFilledButton>
        <RoundedFilledButton
          text={"CONFIRMAR"}
          width={"80%"}
          type={"submit"}
          disabled={operation == "VIEW"}
        ></RoundedFilledButton>
      </GreenCard>
    </Box>
  );
};

interface IInputCardProps {
  minHeight: string;
  route_upper: string;
  children: React.ReactNode;
}

const InputCard: React.FC<IInputCardProps> = ({
  minHeight,
  route_upper,
  children,
}) => {
  return (
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
          <UnderlinedTitle text={route_upper}></UnderlinedTitle>
          {children}
        </Box>
      </GreyCard>
    </Box>
  );
};
