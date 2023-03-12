import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CartService from '../../services/CartService';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        status: 'idle',
        cart: [],
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
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state, action) => {
                state.status = 'padding';
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.product = action.payload;
            });
    },
});
export default cartSlice;

export const getCart = createAsyncThunk('cart/getCart', async (userId) => {
    const response = await CartService.getCart(userId);
    return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (data) => {
    const response = await CartService.addToCart(data);
    return response.data;
});
