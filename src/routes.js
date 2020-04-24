import React from 'react';
import { BrowserRouter, Route , Switch } from "react-router-dom";
//containersImport
import HomePage from './containers/HomePage';

import  GlobalStyle  from './styles/global';




const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      <GlobalStyle/>
      </BrowserRouter>
  );
  
  export default Routes;