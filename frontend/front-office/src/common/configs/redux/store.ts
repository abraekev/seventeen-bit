import { configureStore } from "@reduxjs/toolkit";
import { drawerSliceReducer } from "@/common/configs/redux/slices/drawer-slice";

export const store = configureStore({
  reducer: {
    drawer: drawerSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
