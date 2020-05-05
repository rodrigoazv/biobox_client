import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './ducks/products';
import cartReducer from './ducks/cart';
import layoutReducer from './ducks/layout';



export default configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        layout: layoutReducer
    }
});