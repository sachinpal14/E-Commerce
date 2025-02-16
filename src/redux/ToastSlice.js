import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let buttonSlice = createSlice({
  name: "Toast",
  initialState: [], // ✅ Keep initialState as an array
  reducers: {
    callingToast: (state, action) => {
      toast.success(action.payload, { // ✅ Just trigger toast, don't store it
        position: "top-right",
        autoClose: 2700,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  },
});

export const { callingToast } = buttonSlice.actions;
export default buttonSlice.reducer;
