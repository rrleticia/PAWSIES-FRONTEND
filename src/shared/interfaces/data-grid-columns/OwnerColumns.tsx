import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { useMenuState } from "../../hooks";
import { OptionsMenu } from "../../../components";
import { useOwnerContext } from "../../contexts";

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
        type={"owner"}
        anchorEl={anchorEl}
        show={show}
        handleClose={handleClose}
        contextHook={useOwnerContext}
      ></OptionsMenu>
    </Box>
  );
};
