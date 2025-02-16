import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import buttonSlice from './ToastSlice'
export const store=configureStore({
    reducer:{
        cart:shopSlice,
        toast:buttonSlice
    }
})

 