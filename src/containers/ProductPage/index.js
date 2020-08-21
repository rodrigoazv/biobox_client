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
import FullWidthTabs from "./FullWidthTabs";
import formatPrice from "../../helpers/formatPrice";
import Loading from "../../components/Loading";
//assets

import { Helmet } from "react-helmet";

import { FaTruck } from "react-icons/fa";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [element, setElement] = useState(["No caracteristics"]);
  const [LoadingPage, setLoadingPage] = useState(true);
  const [dataCart, setDataCart] = useState({
    pid: "v",
    quantity: 1,
    price: 1,
    name: product.productName,
    photo: product.photoUrl,
    description: product.productDescription,
  });
  const dispatch = useDispatch();
  window.scrollTo(0, 0);
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
    async function getProduct() {
      try {
        const response = await api.get(`product/${id}`);
        setProduct(response.data);
        setElement(response.data.element);
        setLoadingPage(false);
      } catch {
        setLoadingPage(false);
        alert("erro");
      }
    }
    getProduct();
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
        <title>{`Biocampeiro - ${product.productName}`}</title>
        <meta name="description" content={`${product.productDescription}`} />
        <link rel="canonical" href="http://biocampeiro.com.br" />
      </Helmet>
      <HeaderTopNav />
      {LoadingPage ? (
        <div className="linear">
          <Loading />
        </div>
      ) : (
        <>
          <div className="max-margin-width flex-row">
            <div>
              <img
                src={product.photoUrl}
                className="product-image"
                alt="productimgae"
              ></img>
            </div>
            <div className="product-detail">
              <div className="flex-price">
                <div className="product-name">
                  <p>Marca: {product.brand}</p>
                  <h1>{product.productName}</h1>
                  <p>Unidade: {product.productVol}</p>
                  <p>{product.productDescription}</p>
                  <p>
                    Já ajudamos nossos fornecedores comprando:{" "}
                    {product.sellQuantity}
                  </p>
                </div>
                <div>
                  <div className="details-pricebox">
                    <div className="add-cart-form">
                      <div>
                        <span>{formatPrice(product.productPrice)}</span>
                      </div>
                      <div className="color-add">
                        <div className="add-control">
                          <button
                            className="button-quantity"
                            onClick={HandleDecrement}
                          >
                            -
                          </button>
                          <input
                            className="input-quantity"
                            value={quantity}
                          ></input>
                          <button
                            className="button-quantity"
                            onClick={HandleIncrement}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="button-box">
                    {product.stock === 0 ? (
                      <>
                        <div className="notReady-message">
                          <p>Produto ainda está sendo cultivado</p>
                        </div>
                        <Button
                          text="Sem Estoque"
                          style={{ cursor: "default" }}
                          inputColor={(props) =>
                            props.theme.colors.secondaryLight
                          }
                        />
                      </>
                    ) : (
                      <>
                        <div className="button-sett">
                          <Button
                            text="Adicionar"
                            inputColor={(props) =>
                              props.theme.colors.secondaryLight
                            }
                            type="submit"
                            onClick={() => addCartProduct(dataCart)}
                          />
                        </div>
                        <div className="button-sett">
                          <Link to="/cart">
                            {" "}
                            <Button
                              text="Ir para o carrinho"
                              inputColor={(props) => props.theme.colors.primary}
                              type="submit"
                            />
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
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
              <div className="price-payment">
                <div className="payment-type">Caracteristicas</div>
                <div className="elementProd">
                  {element.map((data) => (
                    <span className="spanicon">
                      <img src={data.iconUrl} alt="no" className="icon" />
                      {data.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="color">
            <div className="max-margin-width flex-row">
              <FullWidthTabs
                description={product.productTecDescription}
                howtostock={product.howToStock}
              />
            </div>
          </div>
        </>
      )}

      <Modal text="Produto adicionado ao Carrinho" />

      <Footer />
      <ResponsiveNav />
    </Container>
  );
}
