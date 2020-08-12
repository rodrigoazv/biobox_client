import React from "react";

import { Container, HowToMake, Basket, Example } from "./styles";
//importação de componentes default - header topnav
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
//componentes internos
import BasketFull from "./BasketFull";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/fetchProduct";

function Cesta() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  return (
    <Container>
      <HeaderTopNav />
      <div className="max-margin-width">
        <div className="marginup">
          <div className="flex-box">
            <div className="flex-how">
              <HowToMake></HowToMake>
              <HowToMake></HowToMake>
            </div>
            <div className="flex-how">
              <HowToMake></HowToMake>
              <HowToMake></HowToMake>
            </div>
            <Basket>
              {products.length === 0 ? <div>carregando</div> : <BasketFull/> }
            </Basket>
          </div>
          <Example></Example>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Cesta;
