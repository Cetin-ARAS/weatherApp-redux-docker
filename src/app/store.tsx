// store.tsx

import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "../features/forecastSlice";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
