import React, { useState } from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Button from '../../components/ButtonFull'
import Footer from '../../components/Footer';

//assets
import { FiMail } from "react-icons/fi";



export default function Contact() {
    const [form,setForm] =useState({name:'', email:'', title:'', message:''})
    function formChange(e){
        const {name, value}= e.target
        setForm({...form,[name]:value})
    }
    function handleMessage(e) {
        e.preventDefault()
        console.log(form)
        setForm({name:'', email:'', title:'', message:''})
        

    }
    return (
        <Container>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Contato</h1>
                   <span><FiMail size={25} color='#95B737'/></span>
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
        </Container >
    );
}
