import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const viewItem = createSlice({
  name: "viewCard",
  initialState,
  reducers: {
    getViewCardData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getViewCardData } = viewItem.actions;
export default viewItem.reducer;
