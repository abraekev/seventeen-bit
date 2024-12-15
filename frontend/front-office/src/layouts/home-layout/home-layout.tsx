import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MyAppBar } from "./components/my-app-bar";

// this will be the structure of the layout
// will need a header, footer and title bar, maybe a side bar?

export const HomeLayout: FC = () => {
  return (
    <>
      <MyAppBar />
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <Outlet />
      </div>
    </>
  );
};
