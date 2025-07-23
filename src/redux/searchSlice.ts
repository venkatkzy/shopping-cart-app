import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  id: string;
  name: string;
  category: string;
}

interface CartState {
  searchTerm: string;
  data: Cart[];
}

const searchSlice = createSlice({
  name: "cart",
  initialState: {
    searchTerm: "",
    data: [],
  } as CartState,
  reducers: {
    changeSearchTerm(state: CartState, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
