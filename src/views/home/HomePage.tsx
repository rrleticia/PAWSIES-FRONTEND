import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  formatDate,
  homeColumns,
  IAppointment,
  space,
  useInputMask,
} from "../../shared";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
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
import { GridColumnVisibilityModel } from "@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces";
import PetsIcon from "@mui/icons-material/Pets";
import Icon from "@mui/material/Icon";

export const HomePage = () => {
  const [date, setDate] = useState<string>("");
  console.log();
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
  const { dateRef } = useInputMask();

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

  useEffect(() => {
    setAappointmentRows([]);
  }, []);

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
