import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1E1F22",
      paper: "#313338", // should be slightly lighter
    },
    primary: {
      main: "#70BA38", // Bright Green
      dark: "#354B42", // Darker Green
    },
    secondary: {
      main: "#313338", // Discord Grey
      light: "#404249",
      dark: "#2B2D31",
    },
    text: {
      primary: "#EFF1EF", // White
      secondary: "#B0B7B7", // Light Gray
    },
  },
  typography: {
    body1: {
      color: "#EFF1EF", // White
    },
    body2: {
      color: "#B0B7B7", // Light Gray
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
