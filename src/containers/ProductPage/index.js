import React, { useState, useEffect } from "react";
import api from "../../service/api";

import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/ducks/cart";

import HeaderTopNav from "../../components/HeaderTopNav";
import ResponsiveNav from "../../components/ResponsiveNav";
import Modal from "../../components/Modal";
import Button from "../../components/ButtonFull";
import Footer from "../../components/Footer";

//assets
import { PRIMARY_GREN, PRIMARY_ORANGE } from "../../styles/colors";

import { Helmet } from "react-helmet";

import Alface from "../../assets/alface.png";

import { FaTruck } from "react-icons/fa";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [dataCart, setDataCart] = useState({
    pid: "v",
    quantity: 1,
    price: 1,
    name: product.productName,
    photo: product.photoUrl,
    description: product.productDescription,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setDataCart({
      pid: product.id,
      quantity: quantity,
      price: product.productPrice,
      name: product.productName,
      photo: product.photoUrl,
      description: product.productDescription,
    });
  }, [product, quantity]);
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`product/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  function HandleIncrement(e) {
    e.preventDefault();
    setQuantity(quantity + 1);
    if (quantity > 8) {
      setQuantity(9);
      alert("O máximo de compras para pessoa juridica são 9 itens");
    }
  }
  function HandleDecrement(e) {
    e.preventDefault();
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  }
  //função para lidar com o modal
  function callModal(IDmodal) {
    const modalBox = document.getElementById(IDmodal);
    modalBox.classList.add("self-show");
    setTimeout(() => modalBox.classList.remove("self-show"), 2500);
  }
  function addCartProduct(dataCart) {
    callModal("modal-full");
    dispatch(addItem(dataCart));
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Biocampeiro - Produtos</title>
        <link rel="canonical" href="http://biocampeiro.com.br" />
      </Helmet>
      <HeaderTopNav />
      <div className="max-margin-width flex-row">
        <div>
          <img src={product.photoUrl} className="product-image" alt="productimgae"></img>
        </div>
        <div className="product-detail">
          <div className="product-name">
            <p>Marca: Biocampeiro</p>
            <h1>{product.productName}</h1>
            <p>Unidade: {product.productVol}</p>
            <p>{product.productDescription}</p>
          </div>
          <div className="price-box">
            <div className="details-pricebox">
              <h2 className="price">R${product.productPrice},00</h2>
              <div className="add-cart-form">
                <div className="color-add">
                  <div className="add-control">
                    <button
                      className="button-quantity"
                      onClick={HandleDecrement}
                    >
                      -
                    </button>
                    <input className="input-quantity" value={quantity}></input>
                    <button
                      className="button-quantity"
                      onClick={HandleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
                <Button
                  text="Adicionar"
                  inputColor={PRIMARY_ORANGE}
                  type="submit"
                  onClick={() => addCartProduct(dataCart)}
                />
                <Link to="/cart">
                  {" "}
                  <Button
                    text="Ir para o carrinho"
                    inputColor={PRIMARY_GREN}
                    type="submit"
                  />
                </Link>
              </div>
            </div>
            <div className="price-payment">
              <div className="payment-type">Formas de pagamento</div>
              <p className="paragraph-payment">
                <FaTruck size={16} />
                Pague quando receber
              </p>
              <p className="paragraph-payment">Pague antes por email</p>
            </div>
            <div>
              <p>caracteristicas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="color">
        <div className="max-margin-width flex-row">
          <div className="margin">
            <h3>Informações tecnicas</h3>
            <p>
              {product.productTecDescription}
            </p>
          </div>
        </div>
      </div>
      <Modal text="Produto adicionado ao Carrinho" />

      <Footer />
      <ResponsiveNav />
    </Container>
  );
}
