import React from 'react';
import { BrowserRouter, Route , Switch, Redirect } from "react-router-dom";
//containersImport
import HomePage from './containers/HomePage';
import CheckIn from './containers/CheckIn';
import Register from './containers/Register';
import Login from './containers/Login';
import About from './containers/About';
import Recipes from './containers/Recipes';
import Products from './containers/Products';
import Contact from './containers/Contact'
import EndOfOrder from './containers/EndOfOrder';
import CartPage from './containers/CartPage';
import ProductPage from './containers/ProductPage';
<<<<<<< HEAD

import GlobalFonts from './styles/fonts/fonts'
import  GlobalStyle  from './styles/global';
=======
//Global Components
import  GlobalStyle  from './styles/global';
import CheckUserAuth from './components/CheckUserAuth';
>>>>>>> d416779f9c09b7a597ca822462e553e80f9d5797


import {Provider} from 'react-redux';
import {useSelector} from 'react-redux'
import store from './store';
import Checkout from './containers/Checkout';

function PrivateRoutes ({component:Component, ...rest}){
  
  const {isAuthenticated, isLoading} = useSelector(state => state.authe);
  
  console.log(isAuthenticated,'HERE<<', isLoading)
  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (<Component {...props}/>) : (<Redirect to={{pathname:'/login', state:{from:props.location}}}/>)
    )} />
  )

}


const Routes = () => (
  <Provider store={store}>
    <GlobalFonts/>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sobre-nos" component={About} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/receitas" component={Recipes} />
<<<<<<< HEAD
          <Route exact path="/produtos" component={Products} />
          <Route exact path="/contato" component={Contact} />
          <PrivateRoutes exact path="/cart" component={CartPage} />
=======
          <Route exact path="/cart" component={CartPage} /> 
          <PrivateRoutes exact path="/checkout" component={Checkout} />
          <PrivateRoutes exact path="/checkout/sendorder" component={EndOfOrder} />
>>>>>>> d416779f9c09b7a597ca822462e553e80f9d5797
        </Switch>
      <GlobalStyle/>
      <CheckUserAuth/>
      </BrowserRouter>
     
  </Provider>
);

export default Routes;