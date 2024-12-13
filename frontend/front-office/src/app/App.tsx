import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { First } from "../pages/first/first";

// move this to a config
const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
]);

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
