import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../../../layouts/home-layout/home-layout";
import { Home } from "../../../pages/home/home";
import { About } from "../../../pages/about/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
