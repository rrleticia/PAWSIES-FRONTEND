import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  filterByDate,
  formatDate,
  homeColumns,
  IAppointment,
  space,
  useInputMask,
  validateString,
} from "../../shared";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  SearchInputBox,
  GreenCard,
  RoundedFilledTitle,
  RoundedTitle,
  TheoBanner,
  HomeDialog,
} from "../../components";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColumnVisibilityModel } from "@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces";
import PetsIcon from "@mui/icons-material/Pets";
import Icon from "@mui/material/Icon";
import { AppointmentService } from "../../services";

export const HomePage = () => {
  const [openError, setOpenError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);

  const [date, setDate] = useState<string>("");
  const [count, setCount] = useState<Number>(0);
  const [completed, setCompleted] = useState<Number>(0);

  const [appointmentRows, setAppointmentRows] = useState<IAppointment[]>([]);

  const fetchData = async () => {
    const result = await AppointmentService.getAll();
    if (result instanceof Error) {
      setOpenError(true);
      setCount(0);
      setCompleted(0);
    } else {
      setAppointmentRows(result);
      setCount(appointmentRows.length);
      setCompleted(appointmentRows.map((a) => a.status == "COMPLETED").length);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [reset]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TheoBanner />
      <DatePicker
        date={date}
        setDate={setDate}
        setOpenError={setOpenError}
        appointmentRows={appointmentRows}
        setAppointmentRows={setAppointmentRows}
        setCount={setCount}
        setCompleted={setCompleted}
        reset={reset}
        setReset={setReset}
      />
      <HomeInfo count={count} completed={completed} />
      <HomeDashBoard appointmentRows={appointmentRows} />

      <HomeDialog
        open={openError}
        toggleDialog={() => setOpenError(!openError)}
      />
    </Box>
  );
};

interface IDatePickerProps {
  date: string;
  setDate: (value: string) => void;
  setOpenError: (value: boolean) => void;
  appointmentRows: IAppointment[];
  setAppointmentRows: (value: IAppointment[]) => void;
  setCount: (value: Number) => void;
  setCompleted: (value: Number) => void;
  reset: boolean;
  setReset: (value: boolean) => void;
}

const DatePicker: React.FC<IDatePickerProps> = ({
  date,
  setDate,
  setOpenError,
  appointmentRows,
  setAppointmentRows,
  setCount,
  setCompleted,
  reset,
  setReset,
}) => {
  const theme = useTheme();
  const { dateRef } = useInputMask();

  const todayDate = new Date();

  const [loading, setLoading] = useState<boolean>(false);

  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    if (validateString(date)) {
      setHasError(false);
      const result = filterByDate(appointmentRows, date);
      console.log(result);
      setAppointmentRows(result);
      setCount(result.length);
      setCompleted(result.map((a) => a.status == "COMPLETED").length);
    } else {
      setHasError(true);
      setOpenError(true);
    }
    setLoading(false);
  };

  return (
    <GreenCard alignContent={"auto"} alignItems={"auto"}>
      <Box
        sx={{
          display: "flex",
          width: "44%",
          borderRadius: theme.spacing(1.5),
          alignItems: "center",
          marginX: theme.spacing(4),
          marginY: theme.spacing(2.5),
          backgroundColor: "white",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "1rem",
            color: "text.primary",
            paddingX: theme.spacing(3),
          }}
        >
          {`TODAY IS: ${formatDate(todayDate)}`}{" "}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderRightWidth: 2,
            color: "text.primary",
          }}
        />
        <Typography
          sx={{
            flex: 1,
            fontWeight: 400,
            fontSize: "1rem",
            color: "text.primary",
            paddingX: theme.spacing(3),
          }}
        >
          {`CURRENT DATE: ${date ? date : "NO DATE"}`}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderRightWidth: 2,
            color: "text.primary",
          }}
        />
        <Button
          disableRipple={true}
          sx={{
            height: "100%",
            color: "secondary.dark",
            paddingX: theme.spacing(3),
          }}
          onClick={() => setReset(!reset)}
        >
          {`RESET`}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon>
          <PetsIcon sx={{ color: "primary.dark" }}></PetsIcon>
        </Icon>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "45%",
          justifyContent: "center",
          marginX: theme.spacing(4),
          marginTop: theme.spacing(2.5),
        }}
      >
        <SearchInputBox
          name={"home-date"}
          label={"PICK DATE FOR SCHEDULES"}
          value={date}
          inputRef={dateRef}
          hasError={hasError}
          errorText={hasError ? "Please provide a valid date." : ""}
          handleChange={setDate}
          disabled={loading}
        ></SearchInputBox>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderRightWidth: 2,
            color: "text.primary",
            marginBottom: theme.spacing(2.5),
          }}
        />
        <Button
          sx={{
            borderTopRightRadius: theme.spacing(1.5),
            borderBottomRightRadius: theme.spacing(1.5),
            fontWeight: 400,
            fontSize: "1rem",

            color: "primary.contrastText",
            backgroundColor: "white",

            paddingX: theme.spacing(9),
            marginBottom: theme.spacing(2.5),
          }}
          onClick={handleClick}
        >
          CHOOSE
        </Button>
      </Box>
    </GreenCard>
  );
};

interface IHomeInfoProps {
  count: Number;
  completed: Number;
}

const HomeInfo: React.FC<IHomeInfoProps> = ({ count, completed }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(4),
      }}
    >
      <RoundedTitle text={"DATE: "} />
      <RoundedTitle text={`${count} APPOINTMENTS`} />
      <RoundedTitle text={`${completed} COMPLETED`} />
      <RoundedFilledTitle text={"CLINIC SCHEDULE"} />
    </Box>
  );
};

interface IHomeDashBoardProps {
  appointmentRows: IAppointment[];
}

const HomeDashBoard: React.FC<IHomeDashBoardProps> = ({ appointmentRows }) => {
  const columnVisibilityModel: GridColumnVisibilityModel = {
    id: false,
  };

  return (
    <GreenCard padding={space.four_space}>
      <DataGrid
        sx={{ width: "100%" }}
        hideFooter
        rows={appointmentRows}
        columns={homeColumns}
        columnVisibilityModel={columnVisibilityModel}
      ></DataGrid>
    </GreenCard>
  );
};
