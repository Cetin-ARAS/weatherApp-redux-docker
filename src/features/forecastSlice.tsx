import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { forecastType } from "../types";

interface ForecastState {
  forecast: forecastType | null;
}

const initialState: ForecastState = {
  forecast: null,
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setForecast: (state, action: PayloadAction<forecastType | null>) => {
      state.forecast = action.payload;
    },
  },
});

export const { setForecast } = forecastSlice.actions;
export default forecastSlice.reducer;
