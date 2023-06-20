import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const audiofileSlice = createSlice({
  name: "audiophile",
  initialState: 1,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => (state > 1 ? state - 1 : state),
  },
});

export const { increment, decrement } = audiofileSlice.actions;

export default audiofileSlice.reducer;
