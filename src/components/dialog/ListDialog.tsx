import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IListDialogProps {
  model: string;
  description: string;
  open: boolean;
  toggleDialog: () => void;
}

export const ListDialog: React.FC<IListDialogProps> = ({
  model,
  description,
  open,
  toggleDialog,
}) => {
  return (
    <Dialog open={open} onClose={toggleDialog}>
      <DialogTitle id="alert-dialog-title">
        {`An unknown error has ocurred when loading the list page.`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`Since an error has occured you will not see any of the ${model} data. The list page will not show anything.`}
          {`The error thrown was: ${description}.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          id="basic-button"
          aria-haspopup="true"
          sx={{ color: "success.dark" }}
          onClick={() => {
            toggleDialog();
          }}
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
