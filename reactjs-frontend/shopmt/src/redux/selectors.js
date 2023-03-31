import { createSelector } from '@reduxjs/toolkit';
export const cartUser = (state) => state.cart.cart;
export const accountUser = (state) => state.account.account;
export const addressUser = (state) => state.address.addresses;
