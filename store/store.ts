import { configureStore } from "@reduxjs/toolkit";
import audiophileReducer from "./audiophileSlice";

const store = configureStore({
  reducer: {
    appState: audiophileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
