import React from 'react';

import { Container } from './styles';
//assets
import Logo from '../../assets/logobio.svg';
import { FaInstagram, FaFacebook, FaPinterest, FaLinkedin } from 'react-icons/fa';


export default function Footer() {

    return (
        <Container>
            <div className="max-margin-width flex-row ">

                <div className="flex-column column-top">
                    <img src={Logo} alt="logo" />
                    <p>Junte-se a mais de 10.000 pessoas que estão pens..</p>
                    <div className="flex-social-media">
                        <a href="https://www.instagram.com/biocampeiro/?hl=pt-br" > <FaInstagram size={32} /></a>
                        <a href="https://www.facebook.com/biocampeiro" ><FaFacebook size={32} /></a>
                        <a href="https://www.instagram.com/biocampeiro/?hl=pt-br" ><FaPinterest size={32} /></a>
                        <a href="https://www.instagram.com/biocampeiro/?hl=pt-br"> <FaLinkedin size={32} /></a>
                    </div>
                </div>

                <div className="flex-beetwen">
                    <div>
                        <h3>Institucional</h3>
                        <div className="flex-column">
                            <a href="/sobre-nos">Quem somos</a>
                            <a href="/sobre-nos">O que fazemos</a>
                            <a href="/localizacao">Onde nos localizamos</a>
                        </div>
                    </div>
                    <div >
                        <h3>Contato</h3>
                        <div className="flex-column">
                            <a href="/">emailbiocampeiro@mail.com</a>
                            <a href="/">9999-9999</a>
                        </div>
                    </div>
                    <div >
                        <h3>Nossos projetos</h3>
                        <div className="flex-column">
                            <a href="/receitas">Receitas Saudáveis</a>
                            <a href="/biocabanas">Biocabanas</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="final-copy max-margin-width">
                Biocampeiro produtos naturais, todos os direitos de imagens, marcas e produtos reservados.
        </div>
        </Container>
    );
}
