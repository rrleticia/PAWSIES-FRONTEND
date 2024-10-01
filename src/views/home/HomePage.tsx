import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Examination, formatDate, space, useInputMask } from "../../shared";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { IAppointment } from "../../models";
import {
  DateInputBox,
  GreenCard,
  Logo,
  RoundedFilledTitle,
  RoundedTitle,
  TheoBanner,
} from "../../components";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import {
  GridColDef,
  GridValueGetter,
} from "@mui/x-data-grid/models/colDef/gridColDef";

export const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TheoBanner />
      <DatePicker />
      <HomeInfo />
      <HomeDashBoard />
    </Box>
  );
};

const DatePicker: React.FC<{}> = ({}) => {
  const theme = useTheme();
  const { currentDate } = useInputMask();

  const todayDate = new Date();

  const [loading, setLoading] = useState<boolean>(false);

  const [date, setDate] = useState<string>("");
  const [datePicked, setDatePicked] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <GreenCard>
      <Box
        sx={{
          display: "flex",
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
            paddingX: theme.spacing(4),
          }}
        >
          {`CURRENT DATE PICKED: ${datePicked ? date : "NO DATE PICKED"}`}{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "40%",
          justifyContent: "center",
          marginX: theme.spacing(4),
          marginTop: theme.spacing(2.5),
        }}
      >
        <DateInputBox
          text={"PICK DATE FOR SCHEDULES"}
          value={date}
          inputRef={currentDate}
          hasError={hasError}
          errorText={hasError ? "Please provide a valid date." : ""}
          handleChange={setDate}
          disabled={loading}
        ></DateInputBox>
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
      status: false,
      examination: Examination.ROUTINE,
      observations: "Observation 1",
      vetID: "vet-5",
      petID: "pet-3",
      ownerID: "owner-2",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
    },
    {
      id: "appointment-2",
      date: new Date("2023-10-19"),
      hour: "13:00",
      status: false,
      examination: Examination.ROUTINE,
      observations: "Observation 2",
      vetID: "vet-2",
      petID: "pet-3",
      ownerID: "owner-2",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
    },
    {
      id: "appointment-3",
      date: new Date("2023-03-16"),
      hour: "12:30",
      status: false,
      examination: Examination.ROUTINE,
      observations: "Observation 3",
      vetID: "vet-4",
      petID: "pet-2",
      ownerID: "owner-4",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
    },
    {
      id: "appointment-4",
      date: new Date("2023-10-22"),
      hour: "10:30",
      status: true,
      examination: Examination.ROUTINE,
      observations: "Observation 4",
      vetID: "vet-4",
      petID: "pet-5",
      ownerID: "owner-1",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
    },
    {
      id: "appointment-5",
      date: new Date("2024-04-15"),
      hour: "17:00",
      status: false,
      examination: Examination.ROUTINE,
      observations: "Observation 5",
      vetID: "vet-2",
      petID: "pet-5",
      ownerID: "owner-2",
      createdAt: new Date("2024-09-29T01:44:27"),
      updatedAt: new Date("2024-09-29T01:44:27"),
    },
  ];

  useEffect(() => {
    setAappointmentRows(appointments);
  }, []);

  const getPetInfo: GridValueGetter<(typeof appointments)[number], unknown> = (
    value,
    row
  ) => {
    return `${row.pet.name + " - " || ""} ${row.pet.age + " years - " || ""} ${
      row.pet.breed || ""
    }`;
  };

  const columns: GridColDef[] = [
    {
      field: "pet",
      headerName: "Pet Information",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      display: "flex",
      flex: 0,
      hideable: false,
    },
    {
      field: "hour",
      headerName: "Hour",
      display: "flex",
      flex: 0,
      hideable: false,
    },
    {
      field: "examination",
      headerName: "Examination",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "status",
      headerName: "Status",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "observations",
      headerName: "Observations",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "acoes",
      type: "actions",
      headerName: "Operations",
      display: "flex",
      flex: 0,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            sx={{
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
            onClick={() => {}}
          >
            Open
          </Button>,
        ];
      },
    },
  ];

  return (
    <GreenCard padding={space.four_space}>
      <DataGrid
        sx={{ width: "100%" }}
        hideFooter
        rows={appointmentRows}
        columns={columns}
      ></DataGrid>
    </GreenCard>
  );
};

const HomeBrand: React.FC<{}> = ({}) => {
  const theme = useTheme();

  return (
    <GreenCard padding={space.four_space}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography variant="body2" sx={{ paddingRight: theme.spacing(2) }}>
            a project by Leticia Ramos Rodrigues
          </Typography>
          <Typography variant="body2">{"© "}</Typography>
          <Typography variant="body2" sx={{ paddingLeft: theme.spacing(2) }}>
            {"2024"}
          </Typography>
        </Box>
      </Box>
    </GreenCard>
  );
};
