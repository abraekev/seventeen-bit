import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121B23", // Dark Blue-Black
      paper: "#121B23",
    },
    primary: {
      main: "#70BA38", // Bright Green
    },
    secondary: {
      main: "#B0B7B7", // Light Gray
    },
    text: {
      primary: "#EFF1EF", // White
      secondary: "#B0B7B7", // Light Gray
    },
  },
  typography: {
    // fontFamily: 'Roboto, Arial, sans-serif',
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
      default: "#EFF1EF", // White
      paper: "#EFF1EF",
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
    // fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      color: "#121B23", // Dark Blue-Black
    },
    body2: {
      color: "#747C7F", // Gray
    },
  },
});
