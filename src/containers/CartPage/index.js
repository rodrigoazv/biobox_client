import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
import ResponsiveNav from "../../components/ResponsiveNav";
import ButtonFull from "../../components/ButtonFull";
import { formatPrice } from "../../helpers";

import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementItem,
  decrementItem,
} from "../../store/ducks/cart";

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

  function handleIncrement(id) {
    dispatch(incrementItem(id));
  }

  function handleDecrement(id) {
    dispatch(decrementItem(id));
  }

  /*const [demands, setDemands] = React.useState(cartProductState);
  React.useEffect(() => {
    const dadu = cartProductState.map((data) => data);
    let climb = dadu.sort((a, b) => (a.name < b.name ? -1 : +1));
    setDemands(climb);
  }, [cartProductState]);*/

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
          <div className="full-width">
            {cartProductState === 0 ? (
              <p>Oops, seu carrinho ta vazio !</p>
            ) : (
              <div>
                <table class="tag-list">
                  {cartProductState.map((product, index) => (
                    <tr key={product.pid}>
                      <td>
                        <div className="display-flex-cart">
                          <img
                            src={product.photo}
                            alt="nophoto"
                            className="cart-photo"
                          />
                          <div>
                            <h4>{product.name}</h4>
                            <p className="display-none-test">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-end">
                          <div className="add-control">
                            <button
                              className="button-quantity"
                              onClick={() => handleDecrement(index)}
                            >
                              -
                            </button>
                            <input
                              className="input-quantity"
                              value={product.quantity}
                            />
                            <button
                              className="button-quantity"
                              onClick={() => handleIncrement(index)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-end">
                          Preço: {formatPrice(product.price)}
                        </div>
                      </td>
                      <td>
                        <button
                          className="mini-button"
                          onClick={() => removeProductCart(product.pid)}
                        >
                          <BsTrash size={22} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
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
            <h2>{formatPrice(total)}</h2>
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
