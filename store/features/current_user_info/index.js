import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const currentUserData = createSlice({
  name: "currentUserData",
  initialState,
  reducers: {
    userdataGetter: (state, action) => {
      state.data.push(action.payload);
      console.log("user in store: ", action.payload)
    },
  },
});

export const { userdataGetter } = currentUserData.actions;
export default currentUserData.reducer;
