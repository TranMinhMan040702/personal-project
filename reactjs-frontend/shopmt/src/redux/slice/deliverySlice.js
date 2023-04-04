import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DeliveryService from '../../services/DeliveryService';
const deliverySlice = createSlice({
    name: 'delivery',
    initialState: {
        status: 'idle',
        deliverise: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDeliverise.pending, (state, action) => {
                state.status = 'padding';
            })
            .addCase(getDeliverise.fulfilled, (state, action) => {
                state.status = 'idle';
                state.deliverise = action.payload;
            });
    },
});
export default deliverySlice;
export const getDeliverise = createAsyncThunk('delivery/getDeliverise', async () => {
    const response = await DeliveryService.getDelivery();
    return response.data;
});
