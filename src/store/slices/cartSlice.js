import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.cart.push(action.payload);
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addItemToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;