import api from '../../service/api';
import { addProducts, getProduct } from '../ducks/products';
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
    return (dispatch) =>{
        api
            .post('login', user)
            .then(res =>{
                localStorage.setItem("sback_id", res.data.token)
                dispatch(login())
            })
            .catch(console.log())
    }
}

export const boolUserVerify = (headers) =>{
    return async (dispatch) =>{  
        try{
            const response = await api.get('validadetoken', headers);
            if(response.data.auth){
                dispatch(sucessAuth(response.data.auth))
            }else{
                dispatch(failedAuth(response.data.auth))
            }
            console.log("retorno do back",response.data.auth)
        }catch{
            console.log()
        }
    } 
}
