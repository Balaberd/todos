import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, TFilter } from "../types";

const initialState: IFilter = {
  active: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state: IFilter, action: PayloadAction<TFilter>) {
      state.active = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
