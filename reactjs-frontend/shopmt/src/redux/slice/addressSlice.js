import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AddressService from '../../services/AddressService';

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        status: 'idle',
        addresses: [],
    },
    reducers: {
        loadAddress: (state, action) => {
            state.addresses.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAddresses.pending, (state, action) => {
                state.status = 'padding';
            })
            .addCase(getAddresses.fulfilled, (state, action) => {
                state.status = 'idle';
                state.addresses = action.payload;
            })
            .addCase(uploadAddress.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(uploadAddress.fulfilled, (state, action) => {
                state.status = 'idle';
                state.addresses = action.payload;
            })
            .addCase(deleteAddress.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.status = 'idle';
                state.addresses = action.payload;
            });
    },
});
export default addressSlice;

export const getAddresses = createAsyncThunk('address/getAddresses', async (userId) => {
    const response = await AddressService.getAddressesByUserId(userId);
    return response.data;
});

export const uploadAddress = createAsyncThunk('address/uploadAddress', async (address) => {
    const response = await AddressService.uploadAddress(address);
    return response.data;
});

export const deleteAddress = createAsyncThunk('address/deleteAddress', async (id) => {
    const response = await AddressService.deleteAddressById(id);
    return response.data;
});
