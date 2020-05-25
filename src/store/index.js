import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './ducks/products';
import cartReducer from './ducks/cart';
import layoutReducer from './ducks/layout';
import authReducer from './ducks/authe';
import userReducer from './ducks/user';


export default configureStore({
    
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        layout: layoutReducer,
        authe : authReducer,
        user: userReducer,
    }
});