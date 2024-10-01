import { AppThemeProvider, space } from "./shared";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.ts";
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles
        styles={{
          body: {
            margin: space.four_half_space,
            padding: 0,
            border: 0,
          },
        }}
      />
      <RouterProvider router={router}></RouterProvider>
    </AppThemeProvider>
  );
}

export default App;
