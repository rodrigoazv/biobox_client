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

import formatPrice from "../../helpers/formatPrice";

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
            pid: product.productId,
            quantity: product.quantity,
            price: product.price,
            name: product.productName,
            photo: product.photoUrl,
            description: product.productDescription,
          };
        })
      );
    }
  }, [order.orders, LoadingPage]);
  function repeatOrder() {
    goCart.map((products) => {
      return dispatch(addItem(products));
    });
    history.push("/cart");
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
                <p>{formatPrice(order.totalPrice)}</p>
                <p>{formatPrice(order.shipValue)}</p>
              </div>
            </div>
          </div>
          <div className="flex-table detail-table">
            <div>
              <LifeOrder props={order.shipStatus} date={order.shipExpectedDate}/>
            </div>
            <div style={{ width: "40%" }}>
              <table className="order-datails">
                <tr>Detalhes do pedido:</tr>
                {order.orders.map((products) => (
                  <tr>
                    <td>
                      <span>{products.quantity}x</span>
                      {products.productName}
                    </td>
                    <td>{formatPrice(products.price)}</td>
                  </tr>
                ))}
                <div className="line" />
                <tr
                  style={{
                    "font-weight": "600",
                    color: "#333",
                    "font-size": "20px",
                  }}
                >
                  <td>Total pedido: </td>
                  <td>{formatPrice(order.totalPrice)}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="button-sett">
            <ButtonFull
              onClick={repeatOrder}
              text="Repetir Pedido"
              inputColor={(props) => props.theme.colors.secondaryLight}
            />
          </div>
        </div>
      )}

      <Footer />
    </Container>
  );
}

export default OneOrder;
