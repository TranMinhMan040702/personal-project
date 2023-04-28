import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DeliveryService from '../../services/DeliveryService';
const passwordSlice = createSlice({
    name: 'password',
    initialState: {
        status: 'idle',
        password: {},
    },
    reducers: {
        storedPassword: (state, action) => {
            state.password = action.payload;
        },
        clearedPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});
export default passwordSlice;
