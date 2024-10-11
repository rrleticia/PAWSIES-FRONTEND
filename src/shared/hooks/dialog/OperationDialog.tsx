import { useState } from "react";

export const useOperationDialog = () => {
  const [openResult, setOpenResult] = useState<boolean>(false);

  const [openError, setOpenError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [openCancel, setOpenCancel] = useState<boolean>(false);

  const handleResult = () => {
    setOpenResult(!openResult);
  };

  const handleError = () => {
    setOpenError(!openError);
  };

  const handleCancel = () => {
    setOpenCancel(!openCancel);
  };

  return {
    openResult,
    toggleResult: handleResult,
    openError,
    toggleError: handleError,
    errorMessage,
    handleMessageChange: setErrorMessage,
    openCancel,
    toggleCancel: handleCancel,
  };
};
