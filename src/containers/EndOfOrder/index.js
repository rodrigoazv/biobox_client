import React from "react";

import { Container } from "./styles";
import { Helmet } from "react-helmet";
//Components
import HeaderTopNav from "../../components/HeaderTopNav";
import ResponsiveNav from "../../components/ResponsiveNav";
import Footer from "../../components/Footer";
import Button from "../../components/ButtonFull";

import { useSelector } from "react-redux";
import { formatPrice } from "../../helpers";

//Images
import InfoBio2 from "../../assets/Man.png";

export default function EndOfOrder() {
  window.scrollTo(0, 0);
  const cartProductState = useSelector((state) => state.cart);
  localStorage.setItem("sback_cart_items", JSON.stringify(cartProductState));

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Biocampeiro - Fim do Pedido</title>
        <link rel="canonical" href="http://biocampeiro.com.br" />
      </Helmet>
      <HeaderTopNav />
      <div className="content max-margin-width">
        <section className="box-end">
          <div>
            <div id="innercontentbox">
              <div className="box-end-content">
                <div className="width-2x">
                  <h1 className="margin-low">
                    Seu pedido foi finalizado, Obrigado por comprar conosco !
                  </h1>
                  <p className="margin-low">
                    Quando você compra conosco ajuda inúmeras familias de
                    pequenos agricultores, além de comer produtos frescos e em
                    sua maioria livre de insumos quimicos.
                  </p>
                  <a href="/user/orders">
                    <Button text="Ver pedidos" />
                  </a>
                </div>
                <div>
                  <img alt="nosource" src={InfoBio2}></img>
                </div>
              </div>
              <div className="box-product">
                <div className="display-flex-cart">
                  <table >
                    <tr>
                      <th>Nome do produto</th>
                      <th>Quantidade</th>
                      <th className="right">Preço</th>
                    </tr>
                    {cartProductState.map((product) => (
                      <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td className="right">{formatPrice(product.price*product.quantity)}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ResponsiveNav />
    </Container>
  );
}
