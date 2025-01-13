import { DrawerContentType } from "@/drawers/drawer-content-map";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DrawerState = {
  open: boolean;
  contentType: DrawerContentType;
};

const initialState: DrawerState = {
  open: false,
  contentType: DrawerContentType.default,
};

const drawerSliceConfig = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<DrawerContentType>) => {
      state.open = true;
      state.contentType = action.payload;
    },
    closeDrawer: (state) => {
      state.open = false;
      state.contentType = DrawerContentType.default;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSliceConfig.actions;
export const drawerSliceReducer = drawerSliceConfig.reducer;
