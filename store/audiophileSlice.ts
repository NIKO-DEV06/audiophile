import { AudiofileState } from "@/interface/Interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AudiofileState = {
  quantity: 1,
};

const audiofileSlice = createSlice({
  name: "audiophile",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      state.quantity = state.quantity > 1 ? state.quantity - 1 : state.quantity;
    },
  },
});

export const { increment, decrement } = audiofileSlice.actions;

export default audiofileSlice.reducer;
