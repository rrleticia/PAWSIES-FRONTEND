import { Box } from "@mui/material";
import { ErrorPage } from "./ErrorPage";
import { space } from "../../shared";

export const ErrorOutlet = () => {
  const minHeight = `calc(100vh - 2 * ${space.four_half_space})`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: minHeight,

        justifyContent: "space-between",
      }}
    >
      <>
        <ErrorPage />
      </>
    </Box>
  );
};
