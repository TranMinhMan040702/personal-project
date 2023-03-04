import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        }, // action creators
        deleteOneItem: (state, action) => {
            const index = state.findIndex((e) => e.id === action.payload);
            state.splice(index, 1);
        },
        removeItem: (state, action) => {
            console.log(action.payload);
            const data = state.filter((e) => e.id !== action.payload);
            state = data;
        },
    },
});
