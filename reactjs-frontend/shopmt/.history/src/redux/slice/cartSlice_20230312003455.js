import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export default createSlice({
    name: 'cart',
    initialState: {
        status: 'idle',
        product: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        }, // action creators
        deleteOneItem: (state, action) => {
            const index = state.findIndex((e) => e.id === action.payload);
            state.splice(index, 1);
        },
        removeItem: (state, action) => {
            state.splice(0, Infinity, ...action.payload);
        },
    },
});
