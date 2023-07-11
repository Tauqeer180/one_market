import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ""
};

export const numberSlice = createSlice({
  name: "shopNumber",
  initialState,
  reducers: {
    getNumber : (state, action) => {
      state.data = action.payload;
    },
  },
});


export const { getNumber } = numberSlice.actions;
export default numberSlice.reducer;