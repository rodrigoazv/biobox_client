import React, {useState} from 'react';
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

export default function Login() {
    const history = useHistory();
    const [form, setForm] = useState({email:'',password:''})
    const dispatch = useDispatch()
    function formChange(e){
        const {name, value}= e.target
        setForm({...form,[name]:value})
    }
    function loginSubmit(e){
        e.preventDefault()
        dispatch(postUserLogin(form));
        setForm({email:'',password:''})
        history.push('/');
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
                    <form onSubmit={loginSubmit} className="form-type-register">
                        <input value={form.email} onChange={formChange} className="input-login" name="email" placeholder="Email" type='Email' />
                        <input value={form.password} onChange={formChange} className="input-login" name="password" placeholder="Senha" type='password' />
                        <Button 
                        type="submit"
                        text="Entrar"
                        />
                        <Link to="/register"><h4>Ainda não tenho conta</h4></Link>
                    </form>
                </div>
            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}
