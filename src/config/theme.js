import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#FFF"
    },
    background: {
      paper: "#FFF",
      default: "#FFF",
      defaultChannel: "255 255 255"
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "rgba(0,0,0,0.87)"
    },
    background: {
      paper: "#121212",
      default: "#121212",
      defaultChannel: "18 18 18"
    }
  }
});

const theme = {
  lightTheme,
  darkTheme
};

export default theme;
