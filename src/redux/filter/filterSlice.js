import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        query: ''
    },
    reducers: {
        update(state, action) {
            state.query = action.payload;
        },
    }
})

export const { update } = filterSlice.actions;
