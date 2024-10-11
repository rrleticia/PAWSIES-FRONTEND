import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IHomeDialogProps {
  open: boolean;
  toggleDialog: () => void;
}

export const HomeDialog: React.FC<IHomeDialogProps> = ({
  open,
  toggleDialog,
}) => {
  return (
    <Dialog open={open} onClose={toggleDialog}>
      <DialogTitle id="alert-dialog-title">
        {`An unknown error has ocurred when loading the home page.`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`Since an error has occured you will not see any of the appointment data. The home page will not show anything.`}
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
