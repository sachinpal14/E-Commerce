import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            let existed = state.find(item => item.id === action.payload.id)
            if (existed) return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
            else state.push(action.payload)
        },
        deleteItem: (state, action) => {
           
           return state.filter((item) => item.id !== action.payload.id)


        },

        decreamentItem:(state,action)=>{
           let updateSystem= state.find((item)=>(item.id===action.payload))
           if(updateSystem) 
            
            return state.map(item=>item.id===action.id && item)
            

        }


    }
})

export const { addItem, deleteItem ,decreamentItem} = shopSlice.actions
export default shopSlice.reducer