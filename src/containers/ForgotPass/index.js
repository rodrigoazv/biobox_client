import React, { useState } from "react";

import { Container } from "./styles";
import HeaderTop from "../../components/HeaderTop";
import ButtonFull from "../../components/ButtonFull";
import { ErrorMessage, Formik, Form, Field } from "formik";

import { forgotPassData } from "../../store/fetchProduct";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";

function ForgotPass() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  async function handleSend(form) {
    setLoading(true);
    const dataSend = {
      email: form.email,
    };
    const data = await dispatch(forgotPassData(dataSend));
    if (data === true) {
      setLoading(false);
      history.push("/pass-change");
    } else {
      setLoading(false);
      alert(`Erro: ${data}`);
    }
  }

  return (
    <Container>
      <HeaderTop />
      <div className="flex-form form-margin-width max-margin-width margint-top-bot">
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={handleSend}
        >
          <Form className="form-submit">
            <h2 className="background-h2">Dados</h2>

            <div>
              <label>Email de recuperação:</label>
              <Field
                type="email"
                name="email"
                className="input-checkout input-margin"
                placeholder="Email de recuperação"
              />
              <ErrorMessage
                className="err-form"
                component="span"
                name="email"
              />
            </div>
            {loading ? <div>...</div> : <ButtonFull text="Enviar" type="submit" />}
          </Form>
        </Formik>
      </div>
    </Container>
  );
}

export default ForgotPass;
