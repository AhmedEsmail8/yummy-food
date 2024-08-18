import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer } from "./slices/mealsSlice";


export const store = configureStore({
    reducer: {
        meals: mealsReducer
    }
})