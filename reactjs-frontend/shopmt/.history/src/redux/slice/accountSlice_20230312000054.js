import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const accountSlice = createSlice({
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
export default accountSlice;

export function createAccount(data) {
    return function createAccountThunk(dispatch, getState) {
        console.log('[Login]', getState());
        dispatch(accountSlice.actions.createAccount(data));
    };
}
