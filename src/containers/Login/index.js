import React from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';



export default function Login() {
    return (
        <Container>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Login</h1>
                    <p>Acessar sua conta</p>
                </section>
                <div className='box-form'>
                    <form className="form-type-register">
                        <input className="input-login" placeholder="Email" type='Email' />
                        <input className="input-login" placeholder="Senha" type='password' />
                        <button className="button-full">Entrar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </Container >
    );
}
