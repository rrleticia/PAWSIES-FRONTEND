import { ResultDialog, ErrorDialog, CancelationDialog } from "../../components";

interface IOperationDialogPorops {
  model: string;
  operation: string;
  description: string;
  openResult: boolean;
  toggleResult: () => void;
  openError: boolean;
  toggleError: () => void;
  openCancel: boolean;
  toggleCancel: () => void;
  handleCancelation?: () => void;
}

export const OperationDialog: React.FC<IOperationDialogPorops> = ({
  model,
  operation,
  description,
  openResult,
  toggleResult,
  openError,
  toggleError,
  openCancel,
  toggleCancel,
  handleCancelation = () => {},
}) => {
  const dialogOperation = operation.toLowerCase();
  return (
    <>
      <ResultDialog
        open={openResult}
        toggleDialog={toggleResult}
        operation={dialogOperation}
        model={model}
      ></ResultDialog>
      <ErrorDialog
        open={openError}
        toggleDialog={toggleError}
        operation={dialogOperation}
        model={model}
        description={description}
      ></ErrorDialog>
      <CancelationDialog
        open={openCancel}
        toggleDialog={toggleCancel}
        model={model}
        operation={dialogOperation}
        handleCancelation={handleCancelation}
      ></CancelationDialog>
    </>
  );
};
