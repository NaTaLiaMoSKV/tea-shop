import { configureStore } from "@reduxjs/toolkit"
import { filterSlice } from './filter/filterSlice'
import { teasReducer } from "./teas/teasSlice"

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        teas: teasReducer,
    },
}) 

