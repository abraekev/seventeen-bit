import { FC } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./test";
import ResponsiveAppBarTwo from "./test2";

// this will be the structure of the layout
// will need a header, footer and title bar, maybe a side bar?

export const HomeLayout: FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBarTwo />
      <Outlet />
    </>
  );
};
