import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
import Button from '../../components/ButtonFull';

import { postUserLogin } from '../../store/fetchProduct';
import {Helmet} from 'react-helmet';

import { ErrorMessage, Formik, Form , Field } from 'formik';
import * as yup from 'yup';


const validation = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é um campo requirido'),
    password: yup.string().min(8,"Minimo 8 digitos").required("Senha é um campo requerido")
})

export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch()
   
    function loginSubmit(form){
        dispatch(postUserLogin(form));
    }
    
   
    return (
        <Container>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Login</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Login</h1>
                    <p>Acessar sua conta</p>
                </section>
                <div className='box-form'>
                    <Formik 
                        initialValues={{
                            email: '',
                            password:''
                        }}
                        onSubmit={loginSubmit} 
                        validationSchema={validation}
                    >
                        <Form className="form-type-register"> 
                            <div className="margin-input">
                                <label>Email:</label>
                                <Field className="input-login" name="email" placeholder="Email" type='Email' />
                                <ErrorMessage className="err-form" component="span" name="email"/>
                            </div>
                            <div className="margin-input">
                                <label>Senha:</label>
                                <Field className="input-login" name="password" placeholder="Senha" type='password' />
                                <ErrorMessage className="err-form" component="span" name="password"/>
                            </div>
                            <Button 
                                type="submit"
                                text="Entrar"
                            />
                            <Link to="/register"><h4>Ainda não tenho conta</h4></Link>
                        </Form>
                    </Formik>
                </div>
            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}
