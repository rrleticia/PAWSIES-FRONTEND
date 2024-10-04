import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  AppointmentStatus,
  Examination,
  formatDate,
  homeColumns,
  space,
  useInputMask,
} from "../../shared";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { IAppointment } from "../../models";
import {
  SearchInputBox,
  GreenCard,
  RoundedFilledTitle,
  RoundedTitle,
  TheoBanner,
} from "../../components";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridValueGetter } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridColumnVisibilityModel } from "@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces";
import PetsIcon from "@mui/icons-material/Pets";
import Icon from "@mui/material/Icon";

export const HomePage = () => {
  const [date, setDate] = useState<string>("");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TheoBanner />
      <DatePicker date={date} setDate={setDate} />
      <HomeInfo />
      <HomeDashBoard />
    </Box>
  );
};

interface IDatePickerProps {
  date: string;
  setDate: (value: string) => void;
}
const DatePicker: React.FC<IDatePickerProps> = ({ date, setDate }) => {
  const theme = useTheme();
  const { currentDate } = useInputMask();

  const todayDate = new Date();

  const [loading, setLoading] = useState<boolean>(false);
  const [datePicked, setDatePicked] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
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
            fontWeight: 400,
            fontSize: "1rem",
            color: "text.primary",
            paddingX: theme.spacing(3),
          }}
        >
          {`CURRENT DATE PICKED: ${datePicked ? date : "NO DATE PICKED"}`}{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: "1",
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
          inputRef={currentDate}
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

const HomeInfo: React.FC<{}> = ({}) => {
  const theme = useTheme();

  const [count, setCount] = useState<Number>(0);
  const [completed, setCompleted] = useState<Number>(0);

  useEffect(() => {
    //
  }, []);

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

const HomeDashBoard: React.FC<{}> = ({}) => {
  const [appointmentRows, setAappointmentRows] = useState<IAppointment[]>([]);

  const appointments: IAppointment[] = [
    {
      id: "appointment-1",
      date: new Date("2023-07-31"),
      hour: "8:30",
      status: AppointmentStatus.IN_PROGRESS,
      examination: Examination.ROUTINE,
      observations: "Observation 1",
      vetID: "vet-5",
      petID: "pet-3",
      ownerID: "owner-2",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
      pet: {},
    },
    {
      id: "appointment-2",
      date: new Date("2023-10-19"),
      hour: "13:00",
      status: AppointmentStatus.IN_PROGRESS,
      examination: Examination.ROUTINE,
      observations: "Observation 2",
      vetID: "vet-2",
      petID: "pet-3",
      ownerID: "owner-2",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
      pet: {},
    },
    {
      id: "appointment-3",
      date: new Date("2023-03-16"),
      hour: "12:30",
      status: AppointmentStatus.CONFIRMED,
      examination: Examination.ROUTINE,
      observations: "Observation 3",
      vetID: "vet-4",
      petID: "pet-2",
      ownerID: "owner-4",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
      pet: {},
    },
    {
      id: "appointment-4",
      date: new Date("2023-10-22"),
      hour: "10:30",
      status: AppointmentStatus.COMPLETED,
      examination: Examination.ROUTINE,
      observations: "Observation 4",
      vetID: "vet-4",
      petID: "pet-5",
      ownerID: "owner-1",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
      pet: {},
    },
    {
      id: "appointment-5",
      date: new Date("2024-04-15"),
      hour: "17:00",
      status: AppointmentStatus.CANCELLED,
      examination: Examination.ROUTINE,
      observations: "Observation 5",
      vetID: "vet-2",
      petID: "pet-5",
      ownerID: "owner-2",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
      pet: {},
    },
  ];

  useEffect(() => {
    setAappointmentRows(appointments);
  }, []);

  const columnVisibilityModel: GridColumnVisibilityModel = {
    id: false,
  };

  const getPetInfo: GridValueGetter<(typeof appointments)[number], unknown> = (
    value,
    row
  ) => {
    return `${row.pet.name + " - " || ""} ${row.pet.age + " years - " || ""} ${
      row.pet.breed || ""
    }`;
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
