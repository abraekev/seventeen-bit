import "./app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./common/configs/theme/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/configs/router/router-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/common/configs/translation/translation";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
