import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../service/api';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
import Button from '../../components/ButtonFull';
//assets
import { FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
export default function Register() {
    const history = useHistory();

    const [completName, setCompletName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            completName,
            email,
            cpf,
            dataNasc,
            number,
            password,
        }
        try {
            const response = await api.post('user', data);

            alert(`Olá ${response.data.completName} seu cadastro foi realizado`);
            history.push('/');
        } catch{
            alert(`Error, tente novamente`);
        }
    }


    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Registre-se</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Cadastro</h1>
                    <p>Faça seu cadastro:</p>
                    <Link to='/login'>Já tenho cadastro</Link>
                </section>
                <div className='box-form'>
                    <form className="form-type-register" onSubmit={handleRegister}>
                        <input
                            className="input-login"
                            placeholder="Email*"
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />

                        <input
                            className="input-login"
                            placeholder="Nome completo*"
                            type='name'
                            value={completName}
                            onChange={e => setCompletName(e.target.value)}
                            required
                        />

                        <input
                            className="input-login"
                            placeholder="Senha*"
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />

                        <input
                            className="input-login"
                            placeholder="CPF*"
                            type='cpf'
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            required
                        />

                        <input
                            className="input-login"
                            placeholder="Data de nascimento*"
                            type='date'
                            value={dataNasc}
                            onChange={e => setDataNasc(e.target.value)}
                            required
                        />

                        <input
                            className="input-login"
                            placeholder="Whatsapp"
                            type='number'
                            value={number}
                            onChange={e => setNumber(e.target.value)}

                        />



                        <div className="use-terms">
                            <span>
                                <FaCheckCircle />
                            </span>
                            <span>Li e aceito os</span>
                            <a href="/"> termos de uso</a>
                        </div>


                        <Button
                            type="submit"
                            text="Cadastrar"
                        />
                    </form>
                </div>
            </div>
            <Footer />
            <ResponsiveNav/>
        </Container>
    );
}
