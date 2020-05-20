import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import Button from '../../components/ButtonFull';

import { IoIosConstruct } from 'react-icons/io';
import { Helmet } from 'react-helmet';

export default function Biocabanas() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Biocabanas</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="content max-margin-width">
                <section className="box-construct">
                    <div className="box-construct-content">
                        <div className="inner-content-box">
                            <div >
                                <h2>Novidades em breve</h2>
                                <h5>Volte depois, página em construção</h5>
                            </div>
                            <span>
                                <IoIosConstruct size={45} />
                            </span>

                            <div>
                                <Link to="/"><Button text="Retornar" /></Link>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
            <Footer />
        </Container >
    );
}
