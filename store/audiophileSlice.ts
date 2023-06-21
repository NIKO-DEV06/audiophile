import { AudiofileState } from "@/interface/Interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AudiofileState = {
  mobileMenu: false,
};

const audiofileSlice = createSlice({
  name: "audiophile",
  initialState,
  reducers: {
    toggleMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.mobileMenu = action.payload;
    },
  },
});

export const { toggleMobileMenu } = audiofileSlice.actions;

export default audiofileSlice.reducer;
