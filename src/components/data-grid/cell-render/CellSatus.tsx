import * as React from "react";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import type { MenuProps } from "@mui/material/Menu";
import Select, { SelectProps } from "@mui/material/Select";
import { styled, useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InfoIcon from "@mui/icons-material/Info";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import {
  GridEditModes,
  GridRenderCellParams,
  GridRenderEditCellParams,
  useGridApiContext,
  useGridRootProps,
} from "@mui/x-data-grid";

export const STATUS_OPTIONS = [
  "SCHEDULED",
  "RESCHEDULED",
  "CONFIRMED",
  "CANCELLED",
  "COMPLETED",
  "NO_SHOW",
  "IN_PROGRESS",
];

interface StatusProps {
  status: string;
}

const StyledChip = styled(Chip)(({ theme }) => ({
  justifyContent: "center",
  "& .icon": {
    color: "inherit",
  },
  "&.SCHEDULED": {
    color: "#7D7DA6",
    border: `1.5px solid`,
    borderColor: "#646484",
    padding: "12px",
  },
  "&.RESCHEDULED": {
    color: "#A6A67D",
    border: `1.5px solid`,
    borderColor: "#848464",
    padding: "12px",
  },
  "&.CONFIRMED": {
    color: "#7DA6A6",
    border: `1.5px solid`,
    borderColor: "#648484",
    padding: "12px",
  },
  "&.COMPLETED": {
    color: "#7DA67D",
    border: `1.5px solid`,
    borderColor: "#648464",
    padding: "12px",
  },
  "&.CANCELLED": {
    color: "#A67D7D",
    border: `1.5px solid`,
    borderColor: "#846464",
    padding: "12px",
  },
  "&.NO_SHOW": {
    color: "#A67DA6",
    border: `1.5px solid`,
    borderColor: "#846484",
    padding: "12px",
  },
  "&.IN_PROGRESS": {
    color: "#7D92A6",
    border: `1.5px solid`,
    borderColor: "#647484",
    padding: "12px",
  },
}));

const Status = React.memo((props: StatusProps) => {
  const { status } = props;

  let icon: any = null;
  if (status === "CANCELLED") {
    icon = <CancelIcon className="icon" />;
  } else if (status === "NO_SHOW") {
    icon = <ReportProblemIcon className="icon" />;
  } else if (status === "SCHEDULED") {
    icon = <EditCalendarIcon className="icon" />;
  } else if (status === "RESCHEDULED") {
    icon = <InfoIcon className="icon" />;
  } else if (status === "CONFIRMED") {
    icon = <MonitorHeartIcon className="icon" />;
  } else if (status === "IN_PROGRESS") {
    icon = <AutorenewIcon className="icon" />;
  } else if (status === "COMPLETED") {
    icon = <CheckCircleIcon className="icon" />;
  }

  let label: string = "NONE";
  if (status === "CANCELLED") {
    label = "CANCELLED";
  } else if (status === "NO_SHOW") {
    label = "NO SHOW";
  } else if (status === "SCHEDULED") {
    label = "SCHEDULED";
  } else if (status === "RESCHEDULED") {
    label = "RESCHEDULED";
  } else if (status === "CONFIRMED") {
    label = "CONFIRMED";
  } else if (status === "IN_PROGRESS") {
    label = "IN PROGRESS";
  } else if (status === "COMPLETED") {
    label = "COMPLETED";
  }

  return (
    <StyledChip
      className={status}
      icon={icon}
      size="small"
      label={label}
      variant="outlined"
    />
  );
});

function EditStatus(props: GridRenderEditCellParams<any, AppointmentStatus>) {
  const { id, value, field } = props;
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();

  const handleChange: SelectProps["onChange"] = async (event) => {
    const isValid = await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });

    if (isValid && rootProps.editMode === GridEditModes.Cell) {
      apiRef.current.stopCellEditMode({ id, field, cellToFocusAfter: "below" });
    }
  };

  const handleClose: MenuProps["onClose"] = (event, reason) => {
    if (reason === "backdropClick") {
      apiRef.current.stopCellEditMode({ id, field, ignoreModifications: true });
    }
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      MenuProps={{
        onClose: handleClose,
      }}
      sx={{
        height: "100%",
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          pl: 1,
        },
      }}
      autoFocus
      fullWidth
      open
    >
      {STATUS_OPTIONS.map((option) => {
        let IconComponent: any = null;

        if (option === "CANCELLED") {
          IconComponent = CancelIcon;
        } else if (option === "NO_SHOW") {
          IconComponent = ReportProblemIcon;
        } else if (option === "SCHEDULED") {
          IconComponent = EditCalendarIcon;
        } else if (option === "RESCHEDULED") {
          IconComponent = InfoIcon;
        } else if (option === "CONFIRMED") {
          IconComponent = MonitorHeartIcon;
        } else if (option === "IN_PROGRESS") {
          IconComponent = AutorenewIcon;
        } else if (option === "COMPLETED") {
          IconComponent = CheckCircleIcon;
        }

        let label = "NONE";
        if (option === "CANCELLED") {
          label = "CANCELLED";
        } else if (option === "NO_SHOW") {
          label = "NO SHOW";
        } else if (option === "SCHEDULED") {
          label = "SCHEDULED";
        } else if (option === "RESCHEDULED") {
          label = "RESCHEDULED";
        } else if (option === "CONFIRMED") {
          label = "CONFIRMED";
        } else if (option === "IN_PROGRESS") {
          label = "IN PROGRESS";
        } else if (option === "COMPLETED") {
          label = "COMPLETED";
        }

        return (
          <MenuItem key={option} value={option}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <IconComponent fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={label} sx={{ overflow: "hidden" }} />
          </MenuItem>
        );
      })}
    </Select>
  );
}

export function renderStatus(params: GridRenderCellParams<any, string>) {
  if (params.value == null) {
    return "";
  }

  return <Status status={params.value} />;
}

export function renderEditStatus(
  params: GridRenderEditCellParams<any, string>
) {
  return <EditStatus {...params} />;
}
