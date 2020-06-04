import React from 'react';

import { Container } from './styles';
import HeaderTop from '../../components/HeaderTop';
import ButtonFull from '../../components/ButtonFull';
import { ErrorMessage, Formik, Form , Field } from 'formik';
import { useParams, useHistory } from 'react-router-dom';

import {RecoveryPassData} from '../../store/fetchProduct';
import { useDispatch } from 'react-redux';

function RecoveryPass() {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useParams();
    console.log(token);
    async function handleSend(form){
        const dataSend ={
            password: form.newPass,
            token: token.token,
            email: form.email
        }
        console.log(dataSend)
        const data = await dispatch(RecoveryPassData(dataSend));
        if(data === true){
            alert(`Senha alterada`)
            history.push('/')
        }
        else{
            alert(`Erro: ${data}`)
        }
    }
    return <Container>
    <HeaderTop/>
    <div className="flex-form form-margin-width max-margin-width margint-top-bot">
        <Formik
                initialValues={{
                    newPass:'',
                    email:'',
                    }}
                onSubmit={handleSend} 
            >
            <Form className="form-width">
                <h2 className="background-h2">Dados</h2> 
                
                <div className="width-maxform">
                    <label>Nova senha:</label>
                    <Field
                        type='email'
                        name='email'
                        className="input-checkout input-margin"
                        placeholder="Seu email"
                    />
                    <ErrorMessage className="err-form" component="span" name="password"/>
                    <Field
                        type='password'
                        name='newPass'
                        className="input-checkout input-margin"
                        placeholder="Nova senha"
                    />
                    <ErrorMessage className="err-form" component="span" name="password"/>
                    <Field
                        type='password'
                        name='newPass'
                        className="input-checkout input-margin"
                        placeholder="Repetir nova senha"
                    />
                    <ErrorMessage className="err-form" component="span" name="password"/>
                
                <ButtonFull
                        text="Enviar"
                        type="submit"
                />
                </div>
            </Form>
        </Formik>
    </div> 
</Container>;
}

export default RecoveryPass;