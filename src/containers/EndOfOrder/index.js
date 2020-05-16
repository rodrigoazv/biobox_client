import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';

//Images
import InfoBio2 from '../../assets/InfoBio2.svg'



export default function EndOfOrder() {
    return (
        <Container>
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
                           <Link to="/"><button className="button-full">Retornar</button></Link> 
                        </div>
                    </div>

                </div>

            </section>
                
            </div>
            <Footer />
        </Container >
    );
}
