// import {  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionTypes";

// // const initialState = {
// //     cart: [],
// // };
// const Reducer2 = (state = [], actions) => {
//     console.log("reducer", actions.payload)
//     switch (actions.type) {

//         case ADD_TO_WISHLIST:

//             return [...state, actions.payload]

//         case REMOVE_FROM_WISHLIST:

//             const updatedWishlist = state.filter((item, index) => {
//                 return item.id !== actions.payload.id;
//             })
//             console.log(" updated ", updatedWishlist)
//             return updatedWishlist

//         default:
//             return state;
//     }
// }


// export default Reducer2
