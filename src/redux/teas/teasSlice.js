import { createSlice } from "@reduxjs/toolkit"
import { addTea, deleteTea, fetchTeas } from "redux/operations";

const handlePending = state => {
    state.isLoading = true;
}
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const teasSlice = createSlice({
    name: 'teas',
    initialState: {
        teasList: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchTeas.pending]: handlePending,
        [fetchTeas.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.teasList = action.payload;
        },
        [fetchTeas.rejected]: handleRejected,

        [addTea.pending]: handlePending,
        [addTea.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.teasList.push(action.payload);
        },
        [addTea.rejected]: handleRejected,

        [deleteTea.pending]: handlePending,
        [deleteTea.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.teasList.findIndex(
                tea => tea.id === action.payload.id
            );
            state.teasList.splice(index, 1);
        },
        [deleteTea.rejected]: handleRejected,

    }
})

export const teasReducer =  teasSlice.reducer;

