import api from '../../service/api';
import { addProducts} from '../ducks/products';
import {login, sucessAuth, failedAuth} from '../ducks/authe';
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

export const getOneUser = (id) =>{
    return (dispatch) =>{
        api
            .get(`useri/${id}`)
            .then(res=>{
                dispatch(getUser(res.data.user))
            })
            .catch(console.log())
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
            dispatch(failedAuth(error.response.data.auth))
        }
    } 
}
