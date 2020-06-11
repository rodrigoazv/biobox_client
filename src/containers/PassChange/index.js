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



export default function PassChange() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Verifique seu Email</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="box-pass">
                    <div className="box-pass-content">
                        <div id="innercontentbox">
                            <div >
                                <h2>Verifique seu email</h2>
                                <h5>Nós acabamos de te mandar um email para a sua redefinição de senha. Não se preocupe se não recebê-lo de imediato, poderá levar alguns poucos minutos</h5>
                            </div>
                            <div>
                                <img alt="" src={InfoBio2}></img>
                            </div>
                            <div>
                                <Link to="/login"><Button text="Retornar" /></Link>
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
