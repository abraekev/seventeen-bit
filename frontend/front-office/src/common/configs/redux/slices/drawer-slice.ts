import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DrawerState = {
  open: boolean;
  contentType: string;
};

type DrawerSlice = {
  reducer: typeof drawerSliceConfig.reducer;
  openDrawer: typeof drawerSliceConfig.actions.openDrawer;
  closeDrawer: typeof drawerSliceConfig.actions.closeDrawer;
};

const initialState: DrawerState = {
  open: false,
  contentType: "default",
};

const drawerSliceConfig = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.contentType = action.payload;
    },
    closeDrawer: (state) => {
      state.open = false;
      state.contentType = "default";
    },
  },
});

export const drawerSlice: DrawerSlice = {
  reducer: drawerSliceConfig.reducer,
  openDrawer: drawerSliceConfig.actions.openDrawer,
  closeDrawer: drawerSliceConfig.actions.closeDrawer,
};
