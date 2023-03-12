import { createSelector } from '@reduxjs/toolkit';
export const cartUser = (state) => state.cart;
export const accountUser = (state) => state.account.product;
