import { AudiofileState } from "@/interface/Interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AudiofileState = {
  mobileMenu: false,
  cartIsVisible: false,
};

const audiofileSlice = createSlice({
  name: "audiophile",
  initialState,
  reducers: {
    toggleMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.mobileMenu = action.payload;
    },
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.cartIsVisible = action.payload;
    },
  },
});

export const { toggleMobileMenu, toggleCart } = audiofileSlice.actions;

export default audiofileSlice.reducer;
