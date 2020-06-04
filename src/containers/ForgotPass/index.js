import React from 'react';

import { Container } from './styles';
import HeaderTop from '../../components/HeaderTop';
import ButtonFull from '../../components/ButtonFull';
import { ErrorMessage, Formik, Form , Field } from 'formik';

import {forgotPassData} from '../../store/fetchProduct';
import { useDispatch } from 'react-redux';

function ForgotPass() {
    const dispatch = useDispatch();
    function handleSend(form){
        console.log(form)
        dispatch(forgotPassData(form));
    }

    return <Container>
        <HeaderTop/>
        <div className="flex-form form-margin-width max-margin-width margint-top-bot">
            <Formik
                    initialValues={{
                        email:'',
                        }}
                    onSubmit={handleSend} 
                >
                <Form className="form-submit">
                    <h2 className="background-h2">Dados</h2> 
                    
                    <div>
                        <label>Email de recuperação:</label>
                        <Field
                            type='email'
                            name='email'
                            className="input-checkout input-margin"
                            placeholder="Email de recuperação"
                        />
                        <ErrorMessage className="err-form" component="span" name="email"/>
                    </div>
                    <ButtonFull
                            text="Enviar"
                            type="submit"
                    />
                </Form>
            </Formik>
        </div> 
    </Container>;
}

export default ForgotPass;