import { configureStore } from "@reduxjs/toolkit";
import { drawerSlice } from "@/common/configs/redux/slices/drawer-slice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
