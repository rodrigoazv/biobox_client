import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';
//assets
import Biomap from '../../assets/Taperoa-test.png'

import { Helmet } from 'react-helmet';

export default function Location() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Localização</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="box-construct">
                    <div className="box-construct-content">
                        <div className="inner-content-box">
                            <div >
                                <h2>Nossa Localização</h2>
                                <h5>É aqui que produzimos</h5>
                            </div>
                            <p>Taperoá é um município brasileiro do estado da Bahia. Localiza-se a uma latitude 13º32'17" sul e a uma longitude 39º05'55" oeste, estando a uma altitude de 15 metros. Sua população estimada em 2011 era de 18 964 habitantes. Possui uma área de 410,175 quilômetros quadrados</p>
                            <img alt="" src={Biomap}></img>

                            <div>
                                <p>Quer conhecer nossa produção?<br /> Apresentamos o projeto</p> <Link to="/"><p>Biocabanas</p></Link>
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
