import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Container } from "./styles";
//Components
import HeaderTop from "../../components/HeaderTop";
import ResponsiveNav from "../../components/ResponsiveNav";
import Button from "../../components/ButtonFull";
import Loading from "../../components/Loading";

import { postUserLogin } from "../../store/fetchProduct";
import { Helmet } from "react-helmet";
//Material UI
import TextField from "@material-ui/core/TextField";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

const validation = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Email é um campo requirido"),
  password: yup
    .string()
    .min(8, "Minimo 8 digitos")
    .required("Senha é um campo requerido"),
});

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function loginSubmit(form) {
    setIsLoading(true);
    const retorno = await dispatch(postUserLogin(form));
    if (retorno) {
      setIsLoading(false);
      history.push("/");
    } else {
      alert("Email ou senha incorretos, confira seus dados e tente novamente.");
      setIsLoading(false);
    }
  }
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Biocampeiro - Login</title>
        <link rel="canonical" href="http://biocampeiro.com.br" />
      </Helmet>
      <HeaderTop />
      <div className="content max-margin-width">
        <section className="text-cad">
          <h1 className="text-cad">Login</h1>
          <p>Acessar sua conta</p>
        </section>
        <div className="box-form">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={loginSubmit}
            validationSchema={validation}
          >
            <Form className="form-type-register">
              <div className="margin-input">
                <Field
                  className="input-login "
                  name="email"
                  placeholder="Email"
                  type="Email"
                  children={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        className="input-login"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    );
                  }}
                />
                <ErrorMessage
                  className="err-form"
                  component="span"
                  name="email"
                />
              </div>
              <div className="margin-input">
                <Link to="/forgot" className="right">
                  Esqueceu sua senha ?
                </Link>
                <Field
                  className="input-login"
                  name="password"
                  placeholder="Senha"
                  type="password"
                  children={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        type="password"
                        className="input-login"
                        id="outlined-basic"
                        label="Senha"
                        variant="outlined"
                      />
                    );
                  }}
                />

                <ErrorMessage
                  className="err-form"
                  component="span"
                  name="password"
                />
              </div>
              {isLoading ? (
                <Loading />
              ) : (
                <div className="button-sett">
                  <Button type="submit" text="Entrar" />
                </div>
              )}
              <p>
                Ainda não tenho conta ?  
                <Link to="/register" style={{ color: "#95b737" }}>
                  Cadastre-se.
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
      <ResponsiveNav />
    </Container>
  );
}
