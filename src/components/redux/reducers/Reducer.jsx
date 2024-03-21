// import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

// // const initialState = {
// //     cart: [],
// // };
// const Reducer = (state = [], actions) => {
//     console.log("reducer", actions.payload)
//     switch (actions.type) {

//         case ADD_TO_CART:

//             return [...state, actions.payload]



//         case REMOVE_FROM_CART:

//             const updatedCart = state.filter((item, index) => {
//                 return item.id !== actions.payload.id;
//             })
//             console.log(" updated ", updatedCart)
//             return updatedCart



//         default:
//             return state;
//     }
// }


// export default Reducer