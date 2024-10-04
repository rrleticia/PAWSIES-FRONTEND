import { OperationType, space } from "../../shared";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface IOptionsMenuProps {
  choosenID: string;
  type: "owner" | "appointments" | "vets" | "dpets";
  anchorEl: HTMLElement | null;
  show: boolean;
  handleClose: () => void;
  contextHook: () => any;
}

export const OptionsMenu: React.FC<IOptionsMenuProps> = ({
  choosenID,
  type,
  anchorEl,
  show,
  handleClose,
  contextHook,
}) => {
  const navigate = useNavigate();
  const { operation, handleIDChange, handleOperationChange } = contextHook();

  const handleClick = (choosenOperation: OperationType) => {
    if (operation != "VIEW") {
      handleIDChange(choosenID);
    }
    handleOperationChange(choosenOperation);
    navigate(`/${type}/operation`);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={show}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
        color: "backroung.paper",
      }}
    >
      <MenuItem onClick={() => handleClick("VIEW")}>
        <VisibilityIcon></VisibilityIcon>
        <Box sx={{ pr: space.one_space }}></Box>
        <Typography>Visualizar</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleClick("EDIT")}>
        <EditIcon></EditIcon>
        <Box sx={{ pr: space.one_space }}></Box>
        <Typography>Editar</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleClick("DELETE")}>
        <DeleteIcon></DeleteIcon>
        <Box sx={{ pr: space.one_space }}></Box>
        <Typography>Deletar</Typography>
      </MenuItem>
    </Menu>
  );
};
