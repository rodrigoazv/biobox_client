import {createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE= JSON.parse(localStorage.getItem("sback_cart_item")) || 0;

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE,{
    [addItem.type]: (state, action) => 
        [...state.filter(
            item => item.pid !== action.payload.pid
        ), Object.assign({}, action.payload) ],
    [removeItem.type]: (state, action) => state.filter(item => item.pid !== action.payload),
    
});

//[...state, action.payload] 