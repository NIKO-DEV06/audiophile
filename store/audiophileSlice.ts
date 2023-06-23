import { AudiofileState, CartItem } from "@/interface/Interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AudiofileState = {
  mobileMenu: false,
  cartIsVisible: false,
  cart: [] as CartItem[],
  totalQuantity: 0,
  checkoutCompleteIsVisible: false,
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
    toggleCheckout: (state, action: PayloadAction<boolean>) => {
      state.checkoutCompleteIsVisible = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        return alert("item is in cart");
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: string | number; updatedQuantity: number }>
    ) => {
      const { id, updatedQuantity } = action.payload;
      const updatedItem = state.cart.find((item) => item.id === id);
      if (updatedItem) {
        updatedItem.quantity = updatedQuantity;
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action: PayloadAction<{ id: string | number }>) => {
      const { id } = action.payload;
      const newCart = state.cart.filter((item) => item.id !== id);
      state.cart = newCart;
    },
  },
});

export const {
  toggleMobileMenu,
  toggleCart,
  toggleCheckout,
  addToCart,
  updateCart,
  emptyCart,
  removeItem,
} = audiofileSlice.actions;

export default audiofileSlice.reducer;
