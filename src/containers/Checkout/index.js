import React, { useEffect, useState } from "react";

import { Container } from "./styles";

//Componentes import
import Footer from "../../components/Footer";
import HeaderTopNav from "../../components/HeaderTopNav";
import ButtonFull from "../../components/ButtonFull";

//api - with redux
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/fetchProduct";
//api - without redux
import api from "../../service/api";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
//Error Bar
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import formatPrice from "../../helpers/formatPrice";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const validation = yup.object().shape({
  zipcode: yup
    .string()
    .matches(
      "45430000",
      "Desculpe ainda não estamos entregando nesse CEP, somente em Taperoá-BA"
    )
    .min(8, "CEP deve conter 8 digitos")
    .max(8, "CEP deve conter 8 digitos")
    .required("X CEP necessário"),
});

function Checkout() {
  const [message, setMessage] = useState(
    "Error: Se você inseriu tudo certinho, provavelmente ta faltando produto :/"
  );
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  //Variaveis const
  const dispatch = useDispatch();
  const history = useHistory();
  //state de envio adress quando não tiver endereço
  const [zipcode, setZipcode] = useState("");
  const [cepVerify, setCepVerify] = useState(true);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  const [shipValue] = useState(0);
  const [shipStatus] = useState("Pedido Realizado");
  const [vaucher] = useState("Sem desconto");
  const [BoolAdress, setBoolAdress] = useState(Boolean);
  const [LoadingPage, setLoadingPage] = useState(false);
  const [LoadingOrder, setLoadingOrder] = useState(true);

  const id = JSON.parse(localStorage.getItem("user_session")); //LocalStorage-set when data response validate token

  const user = useSelector((state) => state.user);
  //Variaveis de envio
  const adressUser = Object.assign({}, user.adress);
  useEffect(() => {
    if (adressUser.zipcode) {
      setBoolAdress(false);
    } else {
      setBoolAdress(true);
    }
  }, [adressUser.zipcode]);
  //Variavel que representa o valor total do pedido
  const cartProductState = useSelector((state) => state.cart);
  useEffect(() => {
    const productTotal = cartProductState.map((product) => {
      let productTotal = +product.price * product.quantity;
      return productTotal;
    });
    const totalPrice = productTotal.reduce(
      (total, productTotal) => total + productTotal,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartProductState]);
  // verify token

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getOneUser(id.userid));
      if (res) {
        setLoadingPage(true);
      }
    };
    fetchData();
  }, [dispatch, id.userid]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("sback_cart_item")));
    setUserId(id.userid);
  }, [products.length, id.userid]);

  useEffect(() => {
    const fetchData = async () => {
      let zipcodeGet = await api.get(`getcep/${zipcode}`);
      setState(zipcodeGet.data.data.state);
      setCity(zipcodeGet.data.data.city);
      setCepVerify(true);
    };
    if (zipcode.length === 8) {
      setCepVerify(false);
      fetchData();
    }
  }, [zipcode]);

  //user get data

  //functions onClick, onSubmit, onChange
  async function handleRegister(e) {
    setLoadingOrder(false);
    const headers = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("sback_id"),
      },
    };
    const adress = {
      zipcode,
      city,
      state,
      street,
      number,
      complement,
      neighborhood,
    };
    const cartByUser = {
      products,
      userId,
      adress,
      totalPrice,
      shipValue,
      shipStatus,
      vaucher,
    };
    try {
      await api.post("sendo", cartByUser, headers);
      history.push("/checkout/sendorder");
    } catch {
      setLoadingOrder(true);
      setOpen(true);
    }
  }

  const cepChange = (value) => {
    setZipcode(value);
  };
  //Registrar sem cep
  async function handleRegisterNoAdress(e) {
    setLoadingOrder(false);
    const headers = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("sback_id"),
      },
    };
    const cartByUser = {
      products,
      userId,
      adressUser,
      totalPrice,
      shipValue,
      shipStatus,
      vaucher,
    };
    try {
      const res = await api.post("sendnoadress", cartByUser, headers);
      setMessage(res.data.message);
      localStorage.removeItem("sback_cart_item");
      history.push("/checkout/sendorder");
    } catch (error) {
      setLoadingOrder(true);
      setOpen(true);
    }
  }

  return (
    <Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
      <HeaderTopNav />
      {LoadingPage ? (
        <div className="max-margin-width margint-top-bot">
          <div className="flex-form">
            <div className="form-margin-width">
              <h2 className="background-h2">Dados usuário</h2>
              <form onSubmit={handleRegister}>
                <input
                  disabled
                  className="input-checkout-autoload input-margin"
                  placeholder={user.completName}
                />

                <input
                  disabled
                  className="input-checkout-autoload input-margin"
                  placeholder={user.email}
                />

                <input
                  disabled
                  className="input-checkout-autoload input-margin"
                  placeholder={user.cpf}
                />

                <input
                  disabled
                  className="input-checkout-autoload input-margin"
                  placeholder={user.dateNasc}
                />
              </form>
            </div>

            {BoolAdress ? (
              <div className="form-margin-width-2x">
                <Formik
                  initialValues={{
                    zipcode: "",
                  }}
                  onSubmit={handleRegister}
                  validationSchema={validation}
                >
                  <Form className="form-submit">
                    <div className="form-adress">
                      <h2 className="background-h2">Dados Entrega</h2>

                      <div>
                        <label>CEP:</label>
                        {cepVerify ? (
                          <>
                            <Field
                              type="zipcode"
                              name="zipcode"
                              validate={cepChange}
                              children={({ field }) => {
                                return (
                                  <input
                                    {...field}
                                    className="input-checkout input-margin"
                                    placeholder="ex. 0000000"
                                    maxLength={8}
                                    required
                                  />
                                );
                              }}
                            />
                            <ErrorMessage
                              className="err-form"
                              component="span"
                              name="zipcode"
                            />
                          </>
                        ) : (
                          <>
                            <Field
                              type="zipcode"
                              name="zipcode"
                              validate={cepChange}
                              children={({ field }) => {
                                return (
                                  <input
                                    {...field}
                                    disabled
                                    className="input-checkout input-margin"
                                    placeholder="ex. 0000000"
                                    maxLength={8}
                                    required
                                  />
                                );
                              }}
                            />
                            <ErrorMessage
                              className="err-form"
                              component="span"
                              name="zipcode"
                            />
                          </>
                        )}
                      </div>
                      <div>
                        <label>Rua:</label>
                        <input
                          className="input-checkout input-margin"
                          placeholder="Endereço"
                          defaultValue={street}
                          onChange={(e) => setStreet(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex-form">
                        <div>
                          <label>Numero:</label>
                          <input
                            className="input-checkout input-margin"
                            placeholder="Numero da casa"
                            defaultValue={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-05">
                          <label>Estado:</label>
                          <input
                            disabled
                            className="input-checkout input-margin input-checkout-autoload"
                            placeholder="Estado"
                            defaultValue={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label>Cidade:</label>
                        <input
                          disabled
                          className="input-checkout input-margin input-checkout-autoload"
                          placeholder="Cidade"
                          defaultValue={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label>Bairro:</label>
                        <input
                          className="input-checkout input-margin"
                          placeholder="Bairro"
                          defaultValue={neighborhood}
                          onChange={(e) => setNeighborhood(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label>Complemento (Opcional):</label>
                        <input
                          className="input-checkout input-margin"
                          placeholder="Complemento (Opcional)"
                          defaultValue={complement}
                          onChange={(e) => setComplement(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="box-checkout">
                      <h2>Falta pouco, quase nada !</h2>
                      <p>
                        Confira com detalhes seu pedido e insira o endereço de
                        entrega.
                      </p>
                      <table className="order-datails">
                        <tr>Detalhes do pedido:</tr>
                        {cartProductState.map((products) => (
                          <tr>
                            <td>
                              <span>{products.quantity}x</span>
                              {products.name}
                            </td>
                            <td>{formatPrice(products.price)}</td>
                          </tr>
                        ))}
                        <div className="line" />
                        <tr>
                          <td>Total pedido: </td>
                          <td>{formatPrice(totalPrice)}</td>
                        </tr>
                        <tr>
                          <td>Frete:</td>
                          <td style={{ color: "#7fbc44" }}>Grátis</td>
                        </tr>
                        <tr>
                          <td>Cupom desconto:</td>
                          <td style={{ color: "#7fbc44" }}>Nenhum</td>
                        </tr>
                        <tr
                          style={{
                            "font-weight": "600",
                            color: "#333",
                            "font-size": "20px",
                          }}
                        >
                          <td>
                            <p>Total pedido:</p>{" "}
                          </td>
                          <td>
                            <p>{formatPrice(totalPrice)}</p>
                          </td>
                        </tr>
                      </table>
                      {LoadingOrder ? (
                        <ButtonFull text="Fazer pedido" type="submit" />
                      ) : (
                        <ButtonFull
                          text="Carregando.."
                          style={{ cursor: "default" }}
                          inputColor="gray"
                        />
                      )}
                    </div>
                  </Form>
                </Formik>
              </div>
            ) : (
              <>
                <div className="form-margin-width">
                  <h2 className="background-h2">Dados Entrega</h2>
                  <div>
                    <p>
                      Endereço de entrega {adressUser.city}, N:
                      {adressUser.number}
                    </p>
                    <p>Cep {adressUser.zipcode}</p>
                  </div>
                  <button
                    onClick={() => setBoolAdress(true)}
                    className="button-change"
                  >
                    Alterar endereço
                  </button>
                </div>
                <div className="box-checkout">
                  <h2>Falta pouco, quase nada !</h2>
                  <p>
                    Confira com detalhes seu pedido e insira o endereço de
                    entrega.
                  </p>
                  <table className="order-datails">
                    <tr>Detalhes do pedido:</tr>
                    {cartProductState.map((products) => (
                      <tr>
                        <td>
                          <span>{products.quantity}x</span>
                          {products.name}
                        </td>
                        <td>{formatPrice(products.price)}</td>
                      </tr>
                    ))}
                    <div className="line" />
                    <tr>
                      <td>Total pedido: </td>
                      <td>{formatPrice(totalPrice)}</td>
                    </tr>
                    <tr>
                      <td>Frete:</td>
                      <td style={{ color: "#7fbc44" }}>Grátis</td>
                    </tr>
                    <tr>
                      <td>Cupom desconto:</td>
                      <td style={{ color: "#7fbc44" }}>Nenhum</td>
                    </tr>
                    <tr
                      style={{
                        "font-weight": "600",
                        color: "#333",
                        "font-size": "20px",
                      }}
                    >
                      <td>
                        <p>Total pedido:</p>{" "}
                      </td>
                      <td>
                        <p>{formatPrice(totalPrice)}</p>
                      </td>
                    </tr>
                  </table>

                  {LoadingOrder ? (
                    <ButtonFull
                      text="Fazer pedido"
                      onClick={() => handleRegisterNoAdress()}
                    />
                  ) : (
                    <ButtonFull
                      text="Carregando.."
                      style={{ cursor: "default" }}
                      inputColor="gray"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div style={{ margin: "100px auto" }}>
          <Loading />
        </div>
      )}
      <Footer />
    </Container>
  );
}

export default Checkout;
