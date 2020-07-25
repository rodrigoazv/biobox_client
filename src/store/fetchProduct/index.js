import api from '../../service/api';
import { addProducts} from '../ducks/products';
import { addCategorys } from '../ducks/category';
import {login, sucessAuth} from '../ducks/authe';
import {getUser} from '../ducks/user';


export const getAllProducts = () => {
    return (dispatch) => {
        api
            .get('product')
            .then(res => {
                dispatch(addProducts(res.data));
            })
            .catch(console.log)
    }
}

export const getAllCategory = () => {
    return (dispatch) => {
        api
            .get('/category/index')
            .then(res => {
                dispatch(addCategorys(res.data));
            })
            .catch(console.log)
    }
}

export const getOneUser = (id) =>{
    return async (dispatch) =>{
        try{
            const response = await api.get(`useri/${id}`);
            dispatch(getUser(response.data.user))
            return true;
        }catch{
            return false;
        }
    }
}

export const forgotPassData = (data) => {
    return async (dispatch) =>{
        try{
            const response = await api.post('forgot_pass', data)
            console.log(response);
            if(response.data.sucess){
                return true;
            }
        }catch(err){
            console.log(err);
            return false;
        }
      
    }
}
export const RecoveryPassData = (data) => {
    return async (dispatch) =>{
        try{
            const response = await api.post('change_pass', data)
            if(response.data.message){
                return true;
            }
        }catch(err){
            console.log(err);
        }
    }
}

export const postUserLogin = (user) => {
    return async (dispatch) =>{
        try{
            const response = await api.post('login', user)
            if(response.data.sucess){
                localStorage.setItem("sback_id", response.data.token)
                const dataSession = {
                    userid: response.data.user, 
                    userName:response.data.userName 
                }
                localStorage.setItem("user_session", JSON.stringify(dataSession))
                dispatch(login())
                return true;
            }
        }
        catch(error){
            return false;
        }
    }
}

export const boolUserVerify = (headers) =>{
    return async (dispatch) =>{  
       try{
            const response = await api.get('auth/1/user', headers);
            if(response.data.auth){
                dispatch(sucessAuth(response.data.auth))
            }
        }catch(error){
            return false;
        }
    } 
}
