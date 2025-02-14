import { createSlice } from "@reduxjs/toolkit";
 

 
export const shopSlice = createSlice({
    
    
    name: "cart",
    initialState: [
       
    ],
    reducers: {
        addItem: (state, action) => {
            let existed = state.find(item => item.id === action.payload.id)
            if (existed) return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
            else state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) item.qty -= 1;
        },
        
       
        


    }
})

export const { addItem, removeItem, decreaseQuantity  } = shopSlice.actions
export default shopSlice.reducer