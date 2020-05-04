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

import  GlobalStyle  from './styles/global';
import ProductPage from './containers/ProductPage';




const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sobre-nos" component={About} />
          <Route exact path="/fim" component={EndOfOrder} />
<<<<<<< HEAD
          <Route exact path="/product/:id" component={ProductPage} />
=======
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/receitas" component={Recipes} />
>>>>>>> 53e188b2c3e82090d4c607f8b33b909afa998bf1
        </Switch>
      <GlobalStyle/>
      </BrowserRouter>
  );
  
  export default Routes;