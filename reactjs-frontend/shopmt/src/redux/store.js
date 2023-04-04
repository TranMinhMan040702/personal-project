import { configureStore } from '@reduxjs/toolkit';
import { accountSlice, cartSlice, addressSlice, deliverySlice } from './slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        account: accountSlice.reducer,
        address: addressSlice.reducer,
        delivery: deliverySlice.reducer,
    },
});
export default store;
