import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
        totalPrice: 0,
    },

    reducers: {
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        
        addItemToCart: (state, action) => {
            state.items.push(action.payload)
        },
        calculateTotalPrice: (state) => {
            let total = 0
            state.items.forEach( (product) => {
                total += product.price
            })
            state.totalPrice = total
        }
    }

})


export const {addItemToCart, calculateTotalPrice,removeItem} = cartSlice.actions;
export default cartSlice.reducer