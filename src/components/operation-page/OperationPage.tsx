import { useNavigate } from "react-router-dom";
import { space, validOperation } from "../../shared";
import { useEffect } from "react";
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

interface IOperationPageProps<T> {
  minHeight: string;
  route: string;
  contextHook: () => any;
  children: React.ReactNode;
}

export const OperationPage = <T,>({
  minHeight,
  route,
  contextHook,
  children,
}: IOperationPageProps<T>) => {
  const navigate = useNavigate();

  const route_upper = route.toUpperCase();

  const { id, operation, handleIDChange, handleOperationChange, resetDefault } =
    contextHook();

  useEffect(() => {
    if (!validOperation(id, operation)) {
      resetDefault();
      navigate(-1);
    }
  }, [handleIDChange, handleOperationChange]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <OperationCard minHeight={minHeight} route={route}></OperationCard>

      <InputCard
        minHeight={minHeight}
        route_upper={route_upper}
        children={children}
      ></InputCard>
    </Box>
  );
};

interface IOperationCardProps {
  minHeight: string;
  route: string;
}

const OperationCard: React.FC<IOperationCardProps> = ({ minHeight, route }) => {
  const theme = useTheme();
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
          filled={true}
          disabled={false}
          handleClick={() => {}}
        ></RoundedSwitchButton>
        <RoundedSwitchButton
          text={"REGISTER"}
          filled={false}
          disabled={false}
        ></RoundedSwitchButton>
        <RoundedSwitchButton
          text={"UPDATE"}
          filled={false}
          disabled={false}
        ></RoundedSwitchButton>
        <RoundedSwitchButton
          text={"DELETE"}
          filled={false}
          disabled={false}
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
          text={"CONFIRMAR"}
          width={"80%"}
        ></RoundedFilledButton>
        <RoundedFilledButton
          text={"CANCELAR"}
          width={"80%"}
        ></RoundedFilledButton>{" "}
        <RoundedFilledButton
          text={"VOLTAR"}
          width={"80%"}
        ></RoundedFilledButton>
      </GreenCard>{" "}
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
