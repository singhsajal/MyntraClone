import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./ActionTypes";

export const AddItemToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data,
})

export const RemoveFromCart = (data) => ({
    type: REMOVE_FROM_CART,
    payload: data,
})

export const AddToWishList = (data) => ({
    type: ADD_TO_WISHLIST,
    payload: data,
})

export const RemoveFromWishlist = (data) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: data,
})