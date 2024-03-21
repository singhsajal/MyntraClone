import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSLice"
import addressReducer from "./slices/addressSlice";
import orderReducer from "./slices/orderSlice";
import loginReducer from "./slices/loginSlice"

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    addresses: addressReducer,
    orders: orderReducer,
    login: loginReducer
});

export default rootReducer;