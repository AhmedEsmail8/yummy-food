import { createSlice } from "@reduxjs/toolkit";
import { getMealsByNameApi } from "../../API/getMeals";

let initialState = {
    meals: null,
    loading: false
}

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        setMeals: (state, action)=>{
            state.meals = action.payload;
        },
        setLoading: (state, action)=>{
            state.loading = action.payload;
        }
    }
})

export let {setMeals, setLoading} = mealsSlice.actions;
export let mealsReducer = mealsSlice.reducer;