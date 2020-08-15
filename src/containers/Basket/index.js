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
  
  window.scrollTo(0, 0);
  

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
                <HowToMake>
                  <p>1. Escolha uma cesta elaborada por nós</p>
                </HowToMake>
                <HowToMake>
                  <p>3. Adicione no carrinho e ajuste a quantidade</p>
                </HowToMake>
              </div>
              <div className="flex-how">
                <HowToMake>
                  <p>2. Fique a vontade para altera-la</p>
                </HowToMake>
                <HowToMake>
                  <p>4. É só esperar a entrega</p>
                </HowToMake>
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
