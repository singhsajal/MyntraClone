import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addresses: []
};

const addressSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
        addAddress(state, action) {
            state.addresses.push(action.payload);
        },
        removeAddress(state, action) {
            state.addresses = state.addresses.filter(address => address.id !== action.payload.id);
        }
    }
});

export const { addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
