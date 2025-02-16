import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      let existed = state.find(item => item.id === action.payload.id);
      if (existed) {
        existed.qty += 1; // ✅ Increase quantity if item exists
      } else {
        state.push({ ...action.payload, qty: 1 }); // ✅ Add item with qty 1
      }
    },

    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload); // ✅ Remove item
    },

    decreaseQuantity: (state, action) => {
      let itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].qty > 1) {
          state[itemIndex].qty -= 1; // ✅ Reduce quantity if >1
        } else {
          state.splice(itemIndex, 1); // ✅ Remove item if qty = 0
        }
      }
    },
  },
});

export const { addItem, removeItem, decreaseQuantity } = shopSlice.actions;
export default shopSlice.reducer;
