import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./searchSlice";
import CategoryReducer from "./CategorySlice";

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    categories: CategoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
