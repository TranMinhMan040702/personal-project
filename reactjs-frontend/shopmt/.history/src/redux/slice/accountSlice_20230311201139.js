import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'account',
    initialState: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        avatar: '',
        cartId: '',
    },
    reducers: {
        createAccount: (state, action) => {
            console.log(state);
        },
    },
});
