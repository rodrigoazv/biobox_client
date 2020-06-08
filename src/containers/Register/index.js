
import React,{useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import api from '../../service/api';
import Loading from '../../components/Loading';


import { Container } from './styles';
//Components
import HeaderTop from '../../components/HeaderTop';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
import Button from '../../components/ButtonFull';
//assets
import { FaCheckCircle } from 'react-icons/fa';
import{Radio} from "@material-ui/core";
import { Helmet } from 'react-helmet';

import { ErrorMessage, Formik, Form , Field } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask'



const validation = yup.object().shape({
    completName: yup
        .string()
        .required("X Insira seu nome completo"),
    email: yup
        .string()
        .email("X Email inválido")
        .required("X Insira um email"),
    cpf: yup
        .string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido, verifique")
        .required("Campo obrigatório"),
    dateNasc: yup
        .string()
        .required("X Campo obrigatório"),
    number: yup
        .string()
        .required(),
    password: yup
        .string()
        .min(8, "Sua senha deve conter pelo menos 8 caracters")
        .max(50, "Sua senha não pode ser maior que 50 caracters")
        .required("Insira uma senha"),
})


export default function Register() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    async function handleRegister(form){
        const data = form.dateNasc.split('/').reverse().join('-');
        console.log(data);
        let formSend ={
            completName: form.completName,
            email: form.email,
            cpf: form.cpf,
            dateNasc: data,
            number: form.number,
            password: form.password,
            sexo: form.sexo
        }
        console.log(formSend)
        try{
            const  response = await api.post('user', formSend);
            alert(`Olá ${response.data.completName} seu cadastro foi realizado`);
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
            <HeaderTop />
            <div className="content max-margin-width">
                <section className="text-cad">
                    <h1 className="text-cad">Cadastro</h1>
                    <p>Faça seu cadastro:</p>
                    <Link to='/login'>Já tenho cadastro</Link>
                </section>
                <div className='box-form'>

                    <Formik
                        initialValues={{
                            completName:'',
                            email:'',
                            cpf:'',
                            dateNasc:'',
                            number:'',
                            password:'',
                            sexo:''
                        }}
                        onSubmit={handleRegister} 
                        validationSchema={validation}
                    >
                        <Form className="form-type-register" >
                           <div className="margin-input">
                               <label>Email:</label>
                                <Field 
                                    className="input-login" 
                                    placeholder="Email*" 
                                    type='email'
                                    name='email'
                                    
                                />
                                <ErrorMessage className="err-form" component="span" name="email"/>
                            </div>
                            <div className="margin-input">   
                                <label>Nome:</label> 
                                <Field  
                                    className="input-login" 
                                    placeholder="Nome completo*" 
                                    type='name'
                                    name='completName'
                                    
                                />
                                 <ErrorMessage className="err-form" component="span" name="completName"/>
                            </div>
                            <div className="margin-input">   
                                <label>Sexo:</label> 
                                
                                <div className="flex-sexo">
                                    <span>Masculino</span> 
                                    <Field  
                                        placeholder="Nome completo*" 
                                        type='radio'
                                        name='sexo'
                                        value="Masculino"
                                        as={Radio}
                                    />
                                    <span>Feminino</span> 
                                    <Field  
                                        placeholder="Nome completo*" 
                                        type='radio'
                                        name='sexo'
                                        value="Feminino"
                                        as={Radio}
                                    />
                                </div>
                                 <ErrorMessage className="err-form" component="span" name="completName"/>
                            </div>
                            <div className="margin-input">
                                <label>Senha:</label> 
                                <Field 
                                    className="input-login" 
                                    placeholder="Senha*" 
                                    type='password'
                                    name='password'
                                />
                                <ErrorMessage className="err-form" component="span" name="password"/>
                            </div> 
                            <div className="margin-input">
                                <label>CPF:</label> 
                                <Field
                                    type='cpf'
                                    name='cpf'
                                    children={({ field }) => {
                                        return <MaskedInput mask={[ /[0-9]/, /\d/, /\d/, '.',/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/, /\d/]}
                                            {...field}
                                            className="input-login" 
                                            placeholder="CPF*" 
                                            />
                                    }} 
                                />
                                <ErrorMessage className="err-form" component="span" name="cpf"/>
                            </div>
                            <div className="margin-input">
                                <label>Data de nascimento:</label>    
                                <Field  
                                    type='dataNasc'
                                    name='dateNasc'
                                    children={({ field }) => {
                                        return <MaskedInput mask={[ /\d/, /\d/, '/',/\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/]}
                                            {...field}
                                            className="input-login" 
                                            placeholder="ex.00/00/0000*" 
                                            />
                                    }} 
                                    
                                />
                                <ErrorMessage className="err-form" component="span" name="dateNasc"/>
                            </div>
                            <div className="margin-input">
                                <label>Whatsapp:</label>          
                                <Field
                                    className="input-login" 
                                    placeholder="Whatsapp" 
                                    type='phone '
                                    name='number'
                                    children={({ field }) => {
                                        return <MaskedInput mask={[ '(', /\d/, /\d/, ')',' ',/\d/, /\d/,/\d/, /\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/]}
                                            {...field}
                                            className="input-login" 
                                            placeholder="ex.75 99999-9999*" 
                                            />
                                    }}
                                
                                />
                                <ErrorMessage className="err-form" component="span" name="number"/>
                            </div>       
                            

                            <div className="use-terms">
                                <span>
                                    <FaCheckCircle/>
                                </span>
                                <span>Ao registrar você aceita todos os</span>
                                <a href="/"> termos de uso</a>
                            </div>

                        
                            {isLoading ? (
                                <Loading/>
                            ) : (
                                <Button 
                                    type="submit"
                                    text="Registrar"
                                />
                            )}
                    </Form>
                </Formik>

                </div>
            </div>
            <Footer />
            <ResponsiveNav/>
        </Container>
    );
}
