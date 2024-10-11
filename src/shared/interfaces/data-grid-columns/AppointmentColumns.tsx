import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import {
  OptionsMenu,
  renderEditStatus,
  renderStatus,
  STATUS_OPTIONS,
} from "../../../components";
import Button from "@mui/material/Button";
import {
  getCreatedAtTransform,
  getDateTransform,
  getPetInfo,
} from "../../util";
import { Box } from "@mui/material";
import { useAppointmentContext } from "../../contexts";
import { useMenuState } from "../../hooks";

export const appointmentColumns: GridColDef[] = [
  {
    field: "id",
    headerAlign: "center",
    headerName: "ID",
    align: "center",
    hideable: true,
  },
  {
    field: "pet",
    headerAlign: "center",
    headerName: "Pet Information",
    align: "center",
    display: "flex",
    flex: 1,
    hideable: false,
    valueGetter: getPetInfo,
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    display: "flex",
    flex: 0,
    hideable: false,
    valueGetter: getDateTransform,
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
    field: "observations",
    headerName: "Observations",
    display: "flex",
    flex: 1,
    hideable: false,
  },
  {
    field: "status",
    headerAlign: "center",
    headerName: "Status",
    align: "center",
    renderCell: renderStatus,
    renderEditCell: renderEditStatus,
    type: "singleSelect",
    valueOptions: STATUS_OPTIONS,
    width: 200,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "createdAt",
    type: "date",
    display: "flex",
    flex: 1,
    hideable: false,
    valueGetter: getCreatedAtTransform,
  },
  {
    field: "ownerID",
    headerName: "OwnerID",
    display: "flex",
    flex: 1,
    hideable: false,
  },
  {
    field: "vetID",
    headerName: "vetID",
    display: "flex",
    flex: 1,
    hideable: false,
  },
  {
    field: "acoes",
    type: "actions",
    headerName: "Operations",
    cellClassName: "actions",
    getActions: ({ id }) => {
      const choosenID = id as string;
      return [<RowMenu id={choosenID}></RowMenu>];
    },
  },
];

const RowMenu: React.FC<{ id: string }> = ({ id }) => {
  const { anchorEl, show, handleClick, handleClose } = useMenuState();

  return (
    <Box>
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
        onClick={handleClick}
      >
        OPEN
      </Button>

      <OptionsMenu
        choosenID={id}
        type={"appointment"}
        anchorEl={anchorEl}
        show={show}
        handleClose={handleClose}
        contextHook={useAppointmentContext}
      ></OptionsMenu>
    </Box>
  );
};
