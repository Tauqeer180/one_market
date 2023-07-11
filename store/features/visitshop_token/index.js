import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

export const visitshopToken = createSlice({
    name: 'visitshopToken',
    initialState,
    reducers: {
        getToken: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { getToken } = visitshopToken.actions;
export default visitshopToken.reducer;