import { configureStore } from '@reduxjs/toolkit';
import { accountSlice, cartSlice, addressSlice, deliverySlice, passwordSlice } from './slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        account: accountSlice.reducer,
        address: addressSlice.reducer,
        delivery: deliverySlice.reducer,
        password: passwordSlice.reducer,
    },
});
export default store;
