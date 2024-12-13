import "./App.css";
import { First } from "./pages/first/first";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <First />;
      </BrowserRouter>
    </QueryClientProvider>
  );
};
