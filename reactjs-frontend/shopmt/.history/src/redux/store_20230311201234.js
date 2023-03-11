import { configureStore } from '@reduxjs/toolkit';
import { accountSlice, cartSlice } from './slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        account: accountSlice.reducer,
    },
});
export default store;
