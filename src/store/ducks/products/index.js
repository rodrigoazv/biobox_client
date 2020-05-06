import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addProduct = createAction('ADD_PRODUCT');
export const addProducts = createAction('ADD_PRODUCTS');

export default createReducer(INITIAL_STATE,{
    [addProduct.type]: (state, action ) => [...state, action.payload],
    [addProducts.type]: (state, action) => [...action.payload]
})