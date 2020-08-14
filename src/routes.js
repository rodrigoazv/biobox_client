import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//containersImport
import HomePage from "./containers/HomePage";
import CheckIn from "./containers/CheckIn";
import Register from "./containers/Register";
import Login from "./containers/Login";
import About from "./containers/About";
import Recipes from "./containers/Recipes";
import Products from "./containers/Products";
import Contact from "./containers/Contact";
import EndOfOrder from "./containers/EndOfOrder";
import CartPage from "./containers/CartPage";
import ProductPage from "./containers/ProductPage";
import Biocabanas from "./containers/Biocabanas";
import Location from "./containers/Location";
import ForgotPass from "./containers/ForgotPass";
import RecoveryPass from "./containers/RecoveryPass";
import PassChange from "./containers/PassChange";
import NoMatchRoute from "./containers/NoMatchRoute";
import allOrder from "./containers/StatusOrder";
import oneOrder from "./containers/OneOrder";
import Cesta from "./containers/Basket";
//import NoMatch from './containers/NoMatchRoute'

//Global Components
import GlobalFonts from "./styles/fonts/fonts";
import GlobalStyle from "./styles/global";
import CheckUserAuth from "./components/CheckUserAuth";

import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store";
import Checkout from "./containers/Checkout";


function PrivateRoutes({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.authe);
  const { isLoading } = useSelector((state) => state.authe);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : isLoading ? (
          <div>Verificando se é você mesmo...</div>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

const Routes = () => (
  <Provider store={store}>
      <GlobalFonts />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sobre-nos" component={About} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/receitas" component={Recipes} />
          <Route exact path="/bioprodutos" component={Products} />
          <Route exact path="/contato" component={Contact} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/biocabanas" component={Biocabanas} />
          <Route exact path="/localizacao" component={Location} />
          <Route exact path="/forgot" component={ForgotPass} />
          <Route exact path="/pass-change" component={PassChange} />
          <Route exact path="/recovery/:token" component={RecoveryPass} />
          <Route exact path="/cesta" component={Cesta} />
          <PrivateRoutes exact path="/checkout" component={Checkout} />
          <PrivateRoutes
            exact
            path="/checkout/sendorder"
            component={EndOfOrder}
          />
          <PrivateRoutes exact path="/user/orders" component={allOrder} />
          <Route exact path="/user/orders/:id" component={oneOrder} />
          <Route component={NoMatchRoute} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
      <CheckUserAuth />
  </Provider>
);

export default Routes;
