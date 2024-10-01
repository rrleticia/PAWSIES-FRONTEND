import { createTheme, ThemeOptions } from "@mui/material";
import "@fontsource-variable/inter";
import "@fontsource/montserrat";
// import { breakpoints } from '../constant';

const themeOptions: ThemeOptions = {
  spacing: 8,
  palette: {
    text: {
      primary: "#282828",
      secondary: "#666666",
      disabled: "#b2b2b2",
    },
    primary: {
      main: "#CED8D6",
      dark: "#a3b6b2",
      light: "#eaefee",
      contrastText: "#627270",
    },
    secondary: {
      main: "#D6CED8",
      dark: "#b2a3b6",
      light: "#eeeaef",
      contrastText: "#353036",
    },
    error: {
      main: "#d8cece",
      dark: "#b6a3a3",
      light: "#efeaea",
      contrastText: "#484141",
    },
    warning: {
      main: "#D8CED0",
      dark: "#b6a3a7",
      light: "#efeaeb",
      contrastText: "#484142",
    },
    info: {
      main: "#ced0d8",
      dark: "#a3a7b6",
      light: "#eaebef",
      contrastText: "#414248",
    },
    success: {
      main: "#CED8D1",
      dark: "#a3b6a9",
      light: "#eaefec",
      contrastText: "#414843",
    },
    background: {
      default: "#FFFFFF",
      paper: "#EDF1F0",
    },
  },
  typography: {
    fontFamily: "Inter Variable",
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
      // [breakpoints.down('md')]: {
      //   fontSize: '5rem',
      // },
    },

    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 500,
      color: "#627270",
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 500,
      fontFamily: "Montserrat",
      color: "#627270",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#627270",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.5rem",
      fontWeight: 400,
    },
    button: {
      fontSize: '"1.5rem"',
      fontWeight: 700,
      color: "#627270",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          backgroundColor: "#EDF1F0",
          "&:last-of-type": {
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          },
        },
        columnSeparator: {
          "&:last-of-type": {
            display: "none",
          },
        },
      },
    },
  },
};

export const Theme = createTheme(themeOptions);
