import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  category: string;
}
export interface CategoryState {
  loading: boolean;
  categories: Array<Category>;
  error: string | undefined;
}
const initialState: CategoryState = {
  loading: false,
  categories: [],
  error: undefined,
};

export const fetchAllCategories = createAsyncThunk(
  "categories/fetAllCategories",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchAllCategories.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.categories = action.payload.map((category) => ({ category }));
      }
    );

    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
