import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../services/UserService';

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        status: 'idle',
        account: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            avatar: '',
            cartId: '',
        },
    },
    reducers: {
        createAccount: (state, action) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createAccount.pending, (state, action) => {});
    },
});
export default accountSlice;

export const createAccount = createAsyncThunk('account/createAccount', async () => {
    const response = await UserService.getUserById();
});
