import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0
};

export const update = createSlice({
  name: "update",
  initialState,
  reducers: {
    updated: (state) => {
      state.data = state.data + 1;
    },
  },
});


export const { updated } = update.actions;
export default update.reducer;