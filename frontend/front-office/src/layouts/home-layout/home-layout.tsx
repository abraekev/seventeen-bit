import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MyAppBar } from "./components/my-app-bar";
import { alpha, Box, SxProps, useTheme } from "@mui/material";
//import wowImg from "/images/WoW_20th_Anniversary_Wallpaper_1920x1080.png";
import wowImg from "/images/WoW_20th_Anniversary_Wallpaper_1080x1920.png";

export const HomeLayout: FC = () => {
  const theme = useTheme();

  const backgroundProps: SxProps = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
    minwidth: "100vw",
    minHeight: "100vh",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${wowImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 1, // Ensure it's fully visible (adjust as needed)
      zIndex: -1, // Keeps it behind content
      filter: "grayscale(100%)", // Apply grayscale effect
      backgroundColor: theme.palette.background.default,
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: alpha(theme.palette.background.default, 0.8),
      zIndex: -1, // Ensures it's above the background but below content
    },
  };

  return (
    <>
      <MyAppBar />

      <Box sx={backgroundProps}>
        <Outlet />
      </Box>
    </>
  );
};
