import { Alert, AlertTitle } from "@mui/material";

export const ErrorPage = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>A aplicação encontrou algum erro inesperado.
    </Alert>
  );
};
