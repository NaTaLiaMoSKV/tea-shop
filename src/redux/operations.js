import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://649067b81e6aa71680cb32a6.mockapi.io';

export const fetchTeas = createAsyncThunk(
    'teas/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/teas');
            return response.data;
        }
        catch (e) {
            console.log('error in fetchTeas')
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addTea = createAsyncThunk(
    'teas/addTea',
    async ({ name, price, description, image }, thunkAPI) => {
        try {
            const response = await axios.post('/teas', { name, price, description, image });
            return response.data;
        }
        catch(e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteTea = createAsyncThunk(
    'teas/deleteTea',
    async (teaId, thunkAPI) => {
        try {
            const response = await axios.delete(`/teas/${teaId}`);
            return response.data;
        }
        catch(e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)