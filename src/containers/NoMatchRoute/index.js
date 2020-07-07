


import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
import Button from '../../components/ButtonFull';

import { Helmet } from 'react-helmet';

export default function NoMatch() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Ops!</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
              
                    <div className="box-construct-content">
                        <div className="inner-content-box">
                            <div >
                                <h1>Ops!</h1>
                                <h2>Página não encontrada :/</h2>
                                <h5>Desculpe pelo incoveniente, mas a página solicitada não existe ou não pode ser encontrada</h5>
                                <h5>Mas pode ficar tranquilo, sinta-se à vontade para continuar navegando pelo site e dando uma olhada nos nossos produtos fresquinhos!</h5>
                            </div>
                            <div>
                                <Link to="/"><Button text="Home" /></Link>
                            </div>
                        </div>

                    </div>

                

            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}


