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
  //Variaveis const
  const dispatch = useDispatch();
  const history = useHistory();
  //state de envio adress quando não tiver endereço
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState("");
  const [totalPrice, setTotalPrice] = useState(null)
  const [BoolAdress, setBoolAdress] = useState(Boolean);
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
  /* {
	"zipcode": "1234",
	"city": "tap",
	"state": "tap",
	"street": "1234",
	"number": "1234",
	"complement": "1234",
	"neighborhood": "1234"
    */
    //Variavel que representa o valor total do pedido
  const cartProductState = useSelector((state) => state.cart);
  useEffect(() =>{
    const productTotal = cartProductState.map((product) => {
      let productTotal = +product.price * product.quantity;
      return productTotal;
    });
    const totalPrice = productTotal.reduce(
      (total, productTotal) => total + productTotal,
      0
    );
    setTotalPrice(totalPrice);
  },[cartProductState])
  
  // verify token

  useEffect(() => {
    dispatch(getOneUser(id.userid));
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
    };
    if (zipcode.length === 8) {
      fetchData();
    }
  }, [street, zipcode]);

  //user get data

  //functions onClick, onSubmit, onChange
  async function handleRegister(e) {
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
    };
    try {
      await api.post("sendo", cartByUser, headers);
      history.push("/checkout/sendorder");
    } catch {
      alert(
        `Ocorreu algum erro confira seus dados e se existe produto no carrinho e tente novamente !`
      );
    }
  }

  const cepChange = (value) => {
    setZipcode(value);
  };
  //Registrar sem cep
  async function handleRegisterNoAdress(e) {
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
    };
    try {
      await api.post("sendnoadress", cartByUser, headers);
      localStorage.removeItem("sback_cart_item");
      history.push("/checkout/sendorder");
    } catch {
      alert(
        `Ocorreu algum erro confira seus dados e se existe produto no carrinho e tente novamente !`
      );
    }
  }

  return (
    <Container>
      <HeaderTopNav />
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
                        placeholder="Complemento"
                        defaultValue={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="box-checkout">
                    <p>
                      Os itens serão enviados de acordo com a data prevista de
                      entrega e localidade especifica
                    </p>
                    <h2>Sub-total</h2>

                    <ButtonFull text="Fazer pedido" type="submit" />
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
                    Endereço de entrega {adressUser.city}, N:{adressUser.number}
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
                <p>
                  Os itens serão enviados de acordo com a data prevista de
                  entrega e localidade especifica
                </p>
                <h2>Sub-total</h2>

                <ButtonFull
                  text="Fazer pedido"
                  onClick={() => handleRegisterNoAdress()}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Checkout;
