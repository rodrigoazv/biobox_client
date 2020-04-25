import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
//Components
import HeaderTopNav  from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';

import {  FaCheckCircle } from 'react-icons/fa';

export default function Register() {
  return (
    <Container>
        <HeaderTopNav/>
        <div className="content max-margin-width">
            <section className="text-cad">
                <h1 className="text-cad">Cadastro</h1>
                <p>Faça seu cadastro:</p>
                <Link to='/login'>Já tenho cadastro</Link>
            </section>
            <div className='box-form'>
                <form>
                    <input className="input-login" placeholder="Email*" type='Email'/>   
                    <input className="input-login" placeholder="Senha*" type='password'/>
                    <input className="input-login" placeholder="Nome completo*"/>
                    <input className="input-login" placeholder="CPF*"/>
                    <input className="input-login" placeholder="Data Nascimento*"/> 
                    <input className="input-login"placeholder="Telefone"/>
                    <div className="use-terms">
                        <span>
                            <FaCheckCircle/>
                        </span>
                        <span>Li e aceito os</span>
                        <a href="/"> termos de uso</a>
                    </div>

                    <button className="button-full">Register</button>
                </form>
            </div>
        </div>
        <Footer/>
    </Container>
  );
}
