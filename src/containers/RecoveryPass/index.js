import React from "react";

import { Container } from "./styles";
import HeaderTop from "../../components/HeaderTop";
import ButtonFull from "../../components/ButtonFull";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useParams, useHistory } from "react-router-dom";

import { RecoveryPassData } from "../../store/fetchProduct";
import { useDispatch } from "react-redux";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email necessário"),
  newPass: Yup.string()
    .min(8, "Senha de no minimo 8 Digitos")
    .required("Insira uma senha"),
  newPassConfirmed: Yup.string().oneOf(
    [Yup.ref("newPass"), null],
    "As senhas devem ser iguais"
  ),
});

function RecoveryPass() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  async function handleSend(form) {
    setIsLoading(true);
    const dataSend = {
      password: form.newPass,
      token: token.token,
      email: form.email,
    };
    const data = await dispatch(RecoveryPassData(dataSend));
    if (data === true) {
      setIsLoading(false);
      alert(`Senha alterada`);

      history.push("/");
    } else {
      alert(`Erro: ${data}`);
    }
  }
  return (
    <Container>
      <HeaderTop />
      <div className="flex-form form-margin-width max-margin-width margint-top-bot">
        <Formik
          initialValues={{
            newPassConfirmed: "",
            newPass: "",
            email: "",
          }}
          onSubmit={handleSend}
          validationSchema={validationSchema}
        >
          <Form className="form-width">
            <h2 className="background-h2">Dados</h2>

            <div className="width-maxform">
              <label>Nova senha:</label>
              <div>
                <Field
                  type="email"
                  name="email"
                  className="input-checkout input-margin"
                  placeholder="Seu email"
                />
                <ErrorMessage
                  className="err-form"
                  component="span"
                  name="email"
                />
              </div>
              <Field
                type="password"
                name="newPass"
                className="input-checkout input-margin"
                placeholder="Nova senha"
              />
              <ErrorMessage
                className="err-form"
                component="span"
                name="newPass"
              />
              <Field
                type="password"
                name="newPassConfirmed"
                className="input-checkout input-margin"
                placeholder="Repetir nova senha"
              />
              <ErrorMessage
                className="err-form"
                component="span"
                name="newPassConfirmed"
              />
              {isLoading ? (
                <div className="button-sett">
                  <ButtonFull
                    text="Carregando"
                    inputColor="gray"
                  />
                </div>
              ) : (
                <div className="button-sett">
                  <ButtonFull text="Enviar" type="submit" />
                </div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}

export default RecoveryPass;
