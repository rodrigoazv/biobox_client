import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = { };

export const getUser = createAction('GET_USER');

export default createReducer(INITIAL_STATE,{
    [getUser.type]: (state, action) => (action.payload),
})