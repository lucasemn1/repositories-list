import { createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#b388ff",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#111012",
      paper: "#222024",
    },
    error: {
      main: "#cf1919",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Pattaya"].join(","),
    h1: {
      fontSize: "1.5rem",
      fontFamily: "Pattaya",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "1.2rem",
      fontWeight: "normal",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": {
          fontFamily: "Montserrat",
          fontWeight: "bolder",
        },
      },
    },
  },
});

export default darkTheme;
