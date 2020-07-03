import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
import ResponsiveNav from "../../components/ResponsiveNav";
import ButtonFull from "../../components/ButtonFull";

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../store/ducks/cart";

import { BsTrash } from "react-icons/bs";
import { Helmet } from "react-helmet";

function CartPage() {
  const cartProductState = useSelector((state) => state.cart);
  localStorage.setItem("sback_cart_item", JSON.stringify(cartProductState));
  const dispatch = useDispatch();

  const productTotal = cartProductState.map((product) => {
    let productTotal = +product.price * product.quantity;
    return productTotal;
  });
  const total = productTotal.reduce(
    (total, productTotal) => total + productTotal,
    0
  );

  function removeProductCart(id) {
    dispatch(removeItem(id));
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Biocampeiro - Carrinho</title>
        <link rel="canonical" href="http://biocampeiro.com.br" />
      </Helmet>
      <HeaderTopNav />
      <div className="max-margin-width margin-align  cart-box">
        <div className="box-product">
          <h2>Carrinho</h2>
          <div>
            {cartProductState === 0 ? (
              <p>Carrinho vazio</p>
            ) : (
              <div>
                <ul>
                  {cartProductState.map((product) => (
                    <li key={product.pid}>
                      <div className="display-flex">
                        <img
                          src={product.photo}
                          alt="none"
                          className="cart-photo"
                        />

                        <div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                        </div>
                      </div>
                      <div className="flex-end">Preço: R${product.price}</div>
                      <div className="flex-end">Quantidade: {product.quantity}</div>
                      <button
                        className="mini-button"
                        onClick={() => removeProductCart(product.pid)}
                      >
                        <BsTrash size={22} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="box-checkout">
          <p>
            Os itens serão enviados de acordo com a data prevista de entrega e
            localidade especifica
          </p>
          <div className="display-flex">
            <h2>Sub-total</h2>
            <h2>R$ {total},0</h2>
          </div>
          <Link to="/checkout">
            <ButtonFull text="Fazer pedido" />
          </Link>
        </div>
      </div>
      <Footer />
      <ResponsiveNav />
    </Container>
  );
}

export default CartPage;
