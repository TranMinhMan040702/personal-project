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
        clearedCart: (state, action) => {
            state.cart = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state, action) => {
                state.status = 'padding';
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cart = action.payload;
            })
            .addCase(addToCart.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cart = action.payload;
            })
            .addCase(deleteOneProductInCartItem.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(deleteOneProductInCartItem.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cart = action.payload;
            })
            .addCase(deleteAllProductInCartItem.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(deleteAllProductInCartItem.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cart = action.payload;
            });
    },
});
export default cartSlice;

export const getCart = createAsyncThunk('cart/getCart', async (userId) => {
    const response = await CartService.getCart(userId);
    return response.data.cartItems;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (data) => {
    const response = await CartService.addToCart(data);
    return response.data.cartItems;
});

export const deleteOneProductInCartItem = createAsyncThunk(
    'cart/deleteOneProductInCartItem',
    async (cartItemId) => {
        const response = await CartService.deleteOne(cartItemId);
        return response.data.cartItems;
    },
);

export const deleteAllProductInCartItem = createAsyncThunk(
    'cart/deleteAllProductInCartItem',
    async (cartItemId) => {
        const response = await CartService.deleteAll(cartItemId);
        return response.data.cartItems;
    },
);
