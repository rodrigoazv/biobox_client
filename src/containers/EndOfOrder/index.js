import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';
import { Helmet } from 'react-helmet';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';
import Button from '../../components/ButtonFull';

//Images
import InfoBio2 from '../../assets/InfoBio2.svg'



export default function EndOfOrder() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Fim do Pedido</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="box-end">
                    <div className="box-end-content">
                        <div id="innercontentbox">
                            <div >
                                <h2>Seu pedido foi finalizado</h2>
                                <h5>Visualize seu email para informações</h5>
                            </div>
                            <div>
                                <img alt="" src={InfoBio2}></img>
                            </div>
                            <div>
                                <Link to="/"><Button text="Retornar" /></Link>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}
