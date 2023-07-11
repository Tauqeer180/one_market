import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const allShopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    getAllShops: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getAllShops } = allShopsSlice.actions;
export default allShopsSlice.reducer;
