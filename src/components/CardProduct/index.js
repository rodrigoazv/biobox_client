import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

//Default-Componentes
import ButtonFull from "../ButtonFull";
import { addItem } from "../../store/ducks/cart";
import { useDispatch } from "react-redux";
import { formatDiscount, formatPrice } from "../../helpers";

export default function CardProduct({ props }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [dataCart, setDataCart] = useState({
    pid: "v",
    quantity: 1,
    price: 1,
    name: props.productName,
    photo: props.photoUrl,
    description: props.productDescription,
  });
  useEffect(() => {
    setDataCart({
      pid: props.id,
      quantity: quantity,
      price: props.productPrice,
      name: props.productName,
      photo: props.photoUrl,
      description: props.productDescription,
    });
  }, [props, quantity]);
  function HandleIncrement() {
    setQuantity(quantity + 1);
    if (quantity > 8) {
      setQuantity(9);
      alert("O máximo de compras para pessoa juridica são 9 itens");
    }
  }
  function HandleDecrement() {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  }
  //função para lidar com o modal 11
  function callModal(IDmodal) {
    const modalBox = document.getElementById(IDmodal);
    modalBox.classList.add("self-show");
    setTimeout(() => modalBox.classList.remove("self-show"), 2500);
  }
  function HandleSubmit(e) {
    e.preventDefault();
  }
  function addCartProduct(dataCart) {
    callModal("modal-full");
    dispatch(addItem(dataCart));
  }
  return (
    <Container>
      <div className="padding-into">
        <div className="align-figure">
          <Link
            to={{
              pathname: `product/${props.id}`,
              search: props.name,
              state: { id: props.id },
            }}
          >
            <img className="size-product" src={props.photoUrl} alt="text" />
          </Link>
        </div>
        <div className="product-info">
          <h2 className="product-name">{`${props.productName} (${props.productVol})`}</h2>

          <div>
            <form onSubmit={HandleSubmit} className="flex-display flex-quant">
              {props.stock === 0 ? (
                <>
                  <div className="notReady-message">
                    <p>Produto ainda está sendo cultivado</p>
                  </div>
                  <div className="button-margin">
                    <ButtonFull
                      text="Sem Estoque"
                      style={{ cursor: "default" }}
                      inputColor={(props) => props.theme.colors.secondaryLight}
                    />
                  </div>
                </>
              ) : (
                  <>
                    <div className="price-product-container">
                      <div>
                        <span className="display-flex">
                          <span className="off-price">
                            R$ {formatDiscount(props.productPrice)}
                          </span>
                          <span className="off-price-style">Off</span>
                        </span>

                        <div className="product-price">
                          {formatPrice(props.productPrice)}
                        </div>
                      </div>

                      <div className="add-control">
                        <button className="button-quantity" data-cy="decrement-button" onClick={HandleDecrement}>
                          -
                  </button>
                        <input className="input-quantity" data-cy="value-quantity" value={quantity} />
                        <button className="button-quantity" data-cy="increment-button" onClick={HandleIncrement}>
                          +
                  </button>
                      </div>
                    </div>
                    <div className="button-margin">
                      <ButtonFull
                        onClick={() => addCartProduct(dataCart)}
                        text="ADICIONAR"
                        type="submit"
                      />
                    </div>
                  </>
                )}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
