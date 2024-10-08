import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import {
  renderEditStatus,
  renderStatus,
  STATUS_OPTIONS,
} from "../../../components";
import { getDateTransform, getPetInfo } from "../../util";

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
];
