import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addCategory = createAction('ADD_Category');
export const addCategorys = createAction('ADD_CategoryS');

export default createReducer(INITIAL_STATE,{
    [addCategory.type]: (state, action ) => [...state, action.payload],
    [addCategorys.type]: (state, action) => [...action.payload],
})