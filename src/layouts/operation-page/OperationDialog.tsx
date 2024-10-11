import { ResultDialog, ErrorDialog, CancelationDialog } from "../../components";
import { OperationType } from "../../shared";

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
  handleIDChange?: (value: string | "NONE") => void;
  handleOperationChange?: (value: OperationType | "NONE") => void;
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
  handleIDChange,
  handleOperationChange,
}) => {
  const dialogOperation = operation.toLowerCase();

  return (
    <>
      <ResultDialog
        open={openResult}
        toggleDialog={toggleResult}
        operation={dialogOperation}
        model={model}
        handleIDChange={handleIDChange}
        handleOperationChange={handleOperationChange}
      ></ResultDialog>
      <ErrorDialog
        open={openError}
        toggleDialog={toggleError}
        operation={dialogOperation}
        model={model}
        description={description}
        handleIDChange={handleIDChange}
        handleOperationChange={handleOperationChange}
      ></ErrorDialog>
      <CancelationDialog
        open={openCancel}
        toggleDialog={toggleCancel}
        model={model}
        operation={dialogOperation}
        handleCancelation={handleCancelation}
        handleIDChange={handleIDChange}
        handleOperationChange={handleOperationChange}
      ></CancelationDialog>
    </>
  );
};
