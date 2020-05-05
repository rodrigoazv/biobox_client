import api from '../../service/api';
import { addProducts } from '../ducks/products';

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