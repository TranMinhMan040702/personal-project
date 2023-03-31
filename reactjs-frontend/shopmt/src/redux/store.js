import { configureStore } from '@reduxjs/toolkit';
import { accountSlice, cartSlice, addressSlice } from './slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        account: accountSlice.reducer,
        address: addressSlice.reducer,
    },
});
export default store;
