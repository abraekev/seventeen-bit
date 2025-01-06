import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1E1F22",
      paper: "#2B2D31", // should be slightly lighter (also taken by the appBar)
    },
    primary: {
      light: "#5FAF2F",
      main: "#70BA38",
      dark: "#354B42",
    },
    secondary: {
      main: "#383A40",
      light: "#404249",
      dark: "#313338",
    },
    text: {
      primary: "#FFFFFF", // White
      secondary: "##B5BAC1", // Light Gray
    },
  },
  typography: {
    body1: {
      color: "#FFFFFF", // White
    },
    body2: {
      color: "#B5BAC1", // Light Gray
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#EFF1EF",
      paper: "#EFF1EF", // should be slightly darker in light mode
    },
    primary: {
      main: "#70BA38", // Bright Green
    },
    secondary: {
      main: "#354B42", // Dark Green
    },
    text: {
      primary: "#121B23", // Dark Blue-Black
      secondary: "#747C7F", // Gray
    },
  },
  typography: {
    body1: {
      color: "#121B23", // Dark Blue-Black
    },
    body2: {
      color: "#747C7F", // Gray
    },
  },
});
