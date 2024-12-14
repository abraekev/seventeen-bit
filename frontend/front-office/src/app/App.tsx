import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { router } from "../common/configs/router/router-config";
import { ThemeProvider } from "@mui/material";
import { theme } from "../common/configs/theme/theme";

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
