import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import {
  renderEditStatus,
  renderStatus,
  STATUS_OPTIONS,
} from "../../../components";
import Button from "@mui/material/Button";

export const homeColumns: GridColDef[] = [
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
