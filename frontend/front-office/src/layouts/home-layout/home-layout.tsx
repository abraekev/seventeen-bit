import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MyAppBar } from "./components/my-app-bar";
import { alpha, Box, SxProps, Typography, useTheme } from "@mui/material";
//import wowImg from "/images/WoW_20th_Anniversary_Wallpaper_1920x1080.png";
import wowImg from "/images/WoW_20th_Anniversary_Wallpaper_1080x1920.png";
import { useResponsive } from "@/common/configs/responsive/use-responsive.hook";

export const HomeLayout: FC = () => {
  const theme = useTheme();
  const { isLargeScreen } = useResponsive();

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

  const contentProps: SxProps = {
    width: isLargeScreen ? "50%" : "90%",
  };

  const footerProps: SxProps = {
    bgcolor: "#212121",
    color: "white",
    textAlign: "center",
  };

  return (
    <>
      <MyAppBar />

      <Box sx={backgroundProps}>
        <Box sx={contentProps}>
          <Outlet />
        </Box>
      </Box>
      <Box sx={footerProps}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Seventeen Bit. Alle rechten voorbehouden.
        </Typography>
        <Typography variant="body2">
          World of Warcraft is eigendom van Blizzard Entertainment. Dit is een
          fanwebsite.
        </Typography>
      </Box>
    </>
  );
};
