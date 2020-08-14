import React, { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/ducks/cart";
//Componentes
import { Container } from "./styles";
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import LifeOrder from "./LifeOrder";
import ButtonFull from "../../components/ButtonFull";

import moment from "moment";
import api from "../../service/api";

function OneOrder() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});
  const [LoadingPage, setLoadingPage] = useState(true);
  const [goCart, setGoCart] = useState([
    {
      pid: "v",
      quantity: 1,
      price: 1,
      name: "",
      photo: "",
      description: "",
    },
  ]);
  let { id } = useParams();
  
  useEffect(() => {
    if (!LoadingPage) {
      setGoCart(
        order.orders.map((product) => {
          return {
            pid: product.id,
            quantity: product.quantity,
            price: product.price,
            name: product.productName,
            photo: product.photo,
            description: product.productDescription,
          };
        })
      );
    }
  }, [order.orders, LoadingPage]);

  function repeatOrder() {
    goCart.map(products => {
      return dispatch(addItem(products))
    })
    history.push("/cart")
  }

  useEffect(() => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("sback_id"),
      },
    };
    api.get(`demand/index/${id}`, headers).then((response) => {
      setOrder(response.data);
      setLoadingPage(false);
    });
  }, [id]);
  
  return (
    <Container>
      <HeaderTopNav />
      {LoadingPage ? (
        <div className="margin">
          <Loading />
        </div>
      ) : (
        <div className="max-margin-width margin-x2">
          <div className="title">
            <h1>Dados do pedido: </h1>
            <div className="detail-table flex-table">
              <div>
                <h5>Detalhes envio: </h5>
                <p>Código: {order.id}</p>
                <p>
                  Data do pedido:{" "}
                  {moment(order.createdDate).format("DD/MM/YYYY")}
                </p>
                <p>{order.shipZipcode}</p>
                <p>
                  {order.shipStreet} N: {order.shipNumber}
                </p>
                <p>
                  {order.shipCity}-{order.shipState}
                </p>
              </div>
              <div>
                <h5>Forma de pagamento: </h5>
                <p>Valor total: {order.vaucher}</p>
              </div>
              <div>
                <h5>Detalhes envio: </h5>
                <div>
                  <p>Valor dos pedidos:..</p>
                  <p>Frete:..</p>
                </div>
              </div>
              <div>
                <h5>
                  <br />{" "}
                </h5>
                <p>{order.totalPrice}</p>
                <p>{order.shipValue}</p>
              </div>
            </div>
          </div>
          <div className="flex-table detail-table">
            <div>
              <LifeOrder />
            </div>
            <div style={{ width: "40%" }}>
              <h4>Sua cesta do pedido: </h4>
              {order.orders.map((products) => (
                <div>
                  <ul>
                    <li key={products.id} className="underline-table">
                      <div>{products.productName}</div>
                      <div>{products.quantity}</div>
                      <div>{products.price}</div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="button-sett">
            <ButtonFull onClick={repeatOrder} text="Repetir Pedido" inputColor={props => props.theme.colors.secondaryLight}/>
          </div>
        </div>
      )}

      <Footer />
    </Container>
  );
}

export default OneOrder;
