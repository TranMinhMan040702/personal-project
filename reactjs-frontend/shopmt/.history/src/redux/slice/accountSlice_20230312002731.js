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
        builder
            .addCase(createAccount.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                state.status = 'idle';
                state.product = action.payload;
            });
    },
});
export default accountSlice;

export const createAccount = createAsyncThunk('account/createAccount', async (id) => {
    const response = await UserService.getUserById(id);
    return response.data;
});
