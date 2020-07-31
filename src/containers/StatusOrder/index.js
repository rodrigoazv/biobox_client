import React, { useEffect, useState } from "react";

import { Container } from "./styles";
//Componentes
import HeaderTopNav from "../../components/HeaderTopNav";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import TableOrder from "./TableOrder";

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

  return (
    <Container>
      <HeaderTopNav />
      <div>
        {loadingPage ? (
          <div className="margin">
            <Loading />
          </div>
        ) : (
          <div className="max-margin-width flex-table">
            <div className="table">
              <div>
                <TableOrder props={user.demands} />
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
