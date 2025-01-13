import "./app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/configs/router/router-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/common/configs/translation/translation";
import { ThemeContextProvider } from "./common/configs/theme/theme-context-provider";
import { Provider } from "react-redux";
import { store } from "./common/configs/redux/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </ThemeContextProvider>
  </StrictMode>
);
