import { useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return {
    isLargeScreen,
  };
};
