import { useNavigate } from "react-router-dom";
import {
  FormHookType,
  ModelOperation,
  OperationType,
  space,
  useOperationDialog,
  validOperation,
} from "../../shared";
import { useEffect, useMemo } from "react";
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
import { OperationDialog } from "./OperationDialog";

interface IOperationPageProps<T> {
  minHeight: string;
  route: string;
  service: any;
  contextHook: () => any;
  operationForm: FormHookType;
  children: React.ReactNode;
}

export const OperationPage = <T,>({
  minHeight,
  route,
  service,
  contextHook,
  operationForm,
  children,
}: IOperationPageProps<T>) => {
  const navigate = useNavigate();

  const route_upper = route.toUpperCase();

  const { id, operation, handleIDChange, handleOperationChange, resetDefault } =
    contextHook();

  const {
    formData,
    errors,
    handleFormData,
    handlePasswordInit,
    verifyErrors,
    resetForm,
  }: FormHookType = operationForm;

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
    const result = await service.getOne(id);
    if (result instanceof Error) {
    } else {
      handleFormData(result);
      if (
        (route == "vet" || route == "owner" || route == "user") &&
        handlePasswordInit
      ) {
        handlePasswordInit();
      }
    }
  };

  useEffect(() => {
    // if (!validOperation(id, operation)) {
    //   resetDefault();
    //   resetForm();
    //   navigate(`/${route}`);
    // }
    // else {
    if (operation != "REGISTER") {
      handleInit();
    }
    // }
    console.log(id);
  }, [handleIDChange, handleOperationChange]);

  const disabledRegister = useMemo(() => {
    if (operation == "REGISTER") return false;
    else return true;
  }, [handleIDChange, handleOperationChange]);

  const disabledExisting = useMemo(() => {
    if (operation == "REGISTER") return true;
    else return false;
  }, [handleIDChange, handleOperationChange]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (verifyErrors()) {
      const result = await ModelOperation(operation, service, id, formData);
      if (result instanceof Error) {
        handleMessageChange(result.message + ".");
        toggleError();
      } else {
        toggleResult();
      }
    }
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
          disabledRegister={disabledRegister}
          disabledExisting={disabledExisting}
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
            handleIDChange("NONE");
            handleOperationChange("NONE");
            navigate(-1);
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
  disabledRegister: boolean;
  disabledExisting: boolean;
  resetForm: () => void;
  toggleCancel: () => void;
}

const OperationCard: React.FC<IOperationCardProps> = ({
  minHeight,
  operation,
  handleOperationChange,
  disabledRegister,
  disabledExisting,
  resetForm,
  toggleCancel,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
          text={"REGISTER"}
          filled={operation == "REGISTER"}
          disabled={disabledRegister}
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
        ></RoundedSwitchButton>
        <RoundedSwitchButton
          text={"DELETE"}
          filled={operation == "DELETE"}
          disabled={disabledExisting}
          handleClick={() => {
            if (!disabledExisting) {
              handleOperationChange("DELETE");
            }
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
            if (operation == "VIEW") navigate(-1);
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
