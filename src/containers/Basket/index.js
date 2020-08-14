import React from "react";

import { Container, HowToMake, Basket, Example } from "./styles";
//importação de componentes default - header topnav
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
//componentes internos
import BasketFull from "./BasketFull";
import { useSelector } from "react-redux";

function Cesta() {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <HeaderTopNav />
      {products.length === 0 ? (
        <div>carregando</div>
      ) : (
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
                <BasketFull />
              </Basket>
            </div>
            <Example></Example>
          </div>
        </div>
      )}
      <Footer />
    </Container>
  );
}

export default Cesta;
