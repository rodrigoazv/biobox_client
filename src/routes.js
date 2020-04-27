import React from 'react';
import { BrowserRouter, Route , Switch } from "react-router-dom";
//containersImport
import HomePage from './containers/HomePage';
import CheckIn from './containers/CheckIn';
import Register from './containers/Register';
import Login from './containers/Login';
import About from './containers/About'
import EndOfOrder from './containers/EndOfOrder'

import  GlobalStyle  from './styles/global';




const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sobre-nos" component={About} />
          <Route exact path="/fim" component={EndOfOrder} />
        </Switch>
      <GlobalStyle/>
      </BrowserRouter>
  );
  
  export default Routes;