
import { createSlice } from "@reduxjs/toolkit";

// Creat eSlcie same syntax we follow as we studied 
//seee only name or functions change honge 
export const CartSlice = createSlice({    //slice ka naam aur createSlice function  
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;