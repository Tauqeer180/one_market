import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    getAllItems: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getAllItems } = allItemsSlice.actions;
export default allItemsSlice.reducer;
