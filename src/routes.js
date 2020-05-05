import React from 'react';
import { BrowserRouter, Route , Switch } from "react-router-dom";
//containersImport
import HomePage from './containers/HomePage';
import CheckIn from './containers/CheckIn';
import Register from './containers/Register';
import Login from './containers/Login';
import About from './containers/About';
import Recipes from './containers/Recipes'
import EndOfOrder from './containers/EndOfOrder';
import CartPage from './containers/CartPage';

import  GlobalStyle  from './styles/global';
import ProductPage from './containers/ProductPage';

import {Provider} from 'react-redux';
import store from './store';


const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sobre-nos" component={About} />
          <Route exact path="/fim" component={EndOfOrder} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/receitas" component={Recipes} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      <GlobalStyle/>
      </BrowserRouter>
  </Provider>
  );
  
  export default Routes;