import {createAction,createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE ={
    isAuthenticated: false,
    isLoading: true
}

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')
//export const verify = createAction('VERIFY')
export const sucessAuth = createAction('SUCESS_AUTH')
export const failedAuth = createAction('FAILED_AUTH')

export default createReducer(INITIAL_STATE, {
    //[verify.type]: (state, action) =>({...state,isAuthenticated:action.payload}),
    [sucessAuth.type]: (state,action) => ({...state, isLoading: true, isAuthenticated:action.payload}),
    [failedAuth.type]: (state,action) => ({...state, isLoading: false, isAuthenticated:action.payload}),
    [login.type]: (state ) =>({...state,isAuthenticated:true, isLoading:true}),
    [logout.type]: (state) =>({...state,isAuthenticated:false, isLoading:false})
})
