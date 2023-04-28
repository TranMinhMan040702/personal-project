import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DeliveryService from '../../services/DeliveryService';
const passwordSlice = createSlice({
    name: 'password',
    initialState: {
        status: 'idle',
        password: [],
    },
    reducers: {},
});
export default passwordSlice;
