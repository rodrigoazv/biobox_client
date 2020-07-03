import React, { useState } from "react";

import { Container } from "./styles";
import api from "../../service/api";

import { PRIMARY_ORANGE } from "../../styles/colors";
import ButtonFull from '../../components/ButtonFull';
import { ErrorMessage, Formik, Form , Field } from 'formik';
import * as yup from "yup";

const validation = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
});

export default function EmailBox() {
  async function sendMail(form) {
    try{
      const response = await api.post('/mail/lead', form);
      alert(response.data.message)
    }
    catch{
      alert("Email já cadastratado ou inválido");
    }
  }
  return (
    <Container>
      <div className="email-box max-margin-width flex-row">
        <div className="width-x2">
          <h1>Deixe seu email para receber ofertas especiais</h1>
          <p>Vamos te enviar todas as novidades !</p>
        </div>
        <div className="flex-row align-horizontal width-x2">
          <Formik
            initialValues={{
              email: "",
              status:"lead"
            }}
            onSubmit={sendMail}
            validationSchema={validation}
          >
            
            <Form className="flex-row width-x1">
              <div className="width-x1">
                <Field
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Deixe seu email aqui.."
                />
                <ErrorMessage
                  className="err-form-spec"
                  component="div"
                  name="email"
                />
              </div>
              <div className="width-x3">
                <ButtonFull text="Enviar" type="submit" inputColor={PRIMARY_ORANGE} />
              </div>
            </Form>
            
          </Formik>
        </div>
      </div>
    </Container>
  );
}
