import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface IResultDialogProps {
  open: boolean;
  toggleDialog: () => void;

  operation: string;
  model: string;
}

export const ResultDialog: React.FC<IResultDialogProps> = ({
  open,
  toggleDialog,
  operation,
  model,
}) => {
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      onClose={() => {
        toggleDialog();
        navigate(-1);
      }}
    >
      <DialogTitle id="alert-dialog-title">
        {`Successful ${operation} of a/an ${model}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`The operation was fullfilled with success! You will be redirected back to the listing page.`}
        </DialogContentText>
      </DialogContent>{" "}
      <DialogActions>
        <Button
          id="basic-button"
          aria-haspopup="true"
          sx={{ color: "success.dark" }}
          onClick={() => {
            toggleDialog();
            navigate(-1);
          }}
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
