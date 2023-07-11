import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ""
};

export const tokenSlice = createSlice({
  name: "shopToken",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.data = action.payload;
    },
  },
});


export const { getToken } = tokenSlice.actions;
export default tokenSlice.reducer;