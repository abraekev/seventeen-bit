import { RootState } from "@/common/configs/redux/store";
import { Drawer } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "@/common/configs/redux/slices/drawer-slice";
import { drawerContentMap } from "@/drawers/drawer-content-map";

//type TestDrawerProps = {};

export const GlobalDrawer: FC = () => {
  const dispatch = useDispatch();
  const { open, contentType } = useSelector((state: RootState) => state.drawer);

  return (
    <Drawer anchor="left" open={open} onClose={() => dispatch(closeDrawer())}>
      {drawerContentMap[contentType]}
    </Drawer>
  );
};
