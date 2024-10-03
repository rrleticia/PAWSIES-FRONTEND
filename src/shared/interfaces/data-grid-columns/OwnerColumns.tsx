import Button from "@mui/material/Button";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";

export const ownerColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    display: "flex",
    flex: 1,
    hideable: true,
  },
  {
    field: "name",
    headerName: "Name",
    display: "flex",
    flex: 1,
    hideable: false,
  },
  {
    field: "email",
    headerName: "E-mail",
    display: "flex",
    flex: 1,
    hideable: false,
  },
  {
    field: "createdAt",
    headerName: "Creation Date",
    type: "date",
    display: "flex",
    flex: 1,
    hideable: false,
  },
  {
    field: "ownerID",
    headerName: "OwnerID",
    display: "flex",
    flex: 0,
    hideable: false,
  },

  {
    field: "acoes",
    type: "actions",
    headerName: "Operations",
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
