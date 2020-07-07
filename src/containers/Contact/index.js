import React from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';


//assets
import { FiMail } from "react-icons/fi";
import { Helmet } from 'react-helmet';
import { FaWhatsapp } from "react-icons/fa";



export default function Contact() {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Contato</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Contato</h1>
                    <h5>Fale Conosco</h5>
                    <span><FiMail size={25} color='#95B737' /></span>
                </section>
                <div className='box-form'>
                    <h3>biocampeiro@mail.com</h3>
                    <h3>biocampeiro@mail.com</h3>
                    <div>
                    <h3>9999-9999</h3> <span><FaWhatsapp size={20} color='#95B737' /></span>
                  
                    </div>      
                    <h3>3333-3333</h3>                      
                </div>
            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}




//Contato - Original
/*import React, { useState } from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Button from '../../components/ButtonFull';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';

//assets
import { FiMail } from "react-icons/fi";
import { Helmet } from 'react-helmet';



export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', title: '', message: '' })
    function formChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    function handleMessage(e) {
        e.preventDefault()
        console.log(form)
        setForm({ name: '', email: '', title: '', message: '' })


    }
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Contato</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Contato</h1>
                    <span><FiMail size={25} color='#95B737' /></span>
                </section>
                <div className='box-form'>
                    <form onSubmit={handleMessage} className="form-type-register">
                        <input value={form.name} onChange={formChange} className="input-login" placeholder="Nome Completo" type='name' name='name' />
                        <input value={form.email} onChange={formChange} className="input-login" placeholder="Email" type='email' name='email' />
                        <input value={form.title} onChange={formChange} className="input-login" placeholder="Título da Mensagem" name='title' />
                        <textarea value={form.message} onChange={formChange} className="text-contact-message" placeholder="Mensagem" name='message' />
                        <Button type="submit" text="Enviar" />
                    </form>
                </div>
            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}*/
