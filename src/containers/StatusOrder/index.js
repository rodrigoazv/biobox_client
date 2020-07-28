import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
//Componentes
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../../store/fetchProduct";

function StatusOrder() {
  const [loadingPage, setLoadingPage] = useState(true);
  const id = JSON.parse(localStorage.getItem("user_session"));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getOneUser(id.userid));
      if (res) {
        setLoadingPage(false);
      }
    };
    fetchData();
  }, [dispatch, id.userid]);
  console.log(user.demands);
  return (
    <Container>
      <HeaderTopNav />
      <div>
        {loadingPage ? (
          <div>
            <Loading></Loading>
          </div>
        ) : (
          <div className="max-margin-width flex-table">
            <div className="detail-table">
              <h4>Seus dados</h4>
              <div>Olá {user.completName}</div>
            </div>
            <div>
              <h4>Todos os seus pedidos: </h4>
              <div className="detail-table">
                <ul>
                  <tr>
                    <th>Nome</th>
                    <th>Data do pedido</th>
                    <th>Status</th>
                    <th>Preço total</th>
                  </tr>
                  {user.demands.map((orders) => (
                    <li key={orders.id}>
                      <Link
                        to={{
                          pathname: `orders/${orders.id}`,
                          search: orders.name,
                          state: { id: orders.id },
                        }}
                        className="font-li"
                      >
                        <table>
                          <tr>
                            <td>{user.completName}</td>
                            <td>{orders.createdDate}</td>
                            <th>{orders.shipStatus}</th>
                            <td>{orders.totalPrice}</td>
                          </tr>
                        </table>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Container>
  );
}

export default StatusOrder;
