import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

interface ICancelatonDialogProps {
  open: boolean;
  toggleDialog: () => void;
  model: string;
  operation: string;
  handleCancelation: () => void;
}

export const CancelatonDialog: React.FC<ICancelatonDialogProps> = ({
  open,
  toggleDialog,
  model,
  operation,
  handleCancelation,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Dialog open={open} onClose={toggleDialog}>
      <DialogTitle id="alert-dialog-title">
        {`Cancelar ${operation} de ${model}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`When confirmed all data will be lost. Please confirm the cancelation of ${operation} a/an ${model}.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          id="basic-button"
          sx={{ color: "error.dark" }}
          onClick={toggleDialog}
        >
          Cancelar
        </Button>
        <Button
          id="basic-button"
          aria-haspopup="true"
          sx={{ color: "success.dark" }}
          onClick={() => {
            handleCancelation();
            toggleDialog();
            handleBack();
          }}
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
