import React from 'react';

import { Container } from './styles';
//assets
import Logo from '../../assets/logobio.svg';
import { FaInstagram, FaFacebook, FaPinterest, FaLinkedin  } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
        <div className="max-margin-width flex-row ">
            
            <div className="flex-column">
                <img src={Logo} alt="logo"/>
                <p>Junte-se a mais de 10.000 pessoas que estão pens..</p>
                <div className="flex-social-media">
                    <FaInstagram size={32}/>
                    <FaFacebook size={32}/>
                    <FaPinterest size={32}/>
                    <FaLinkedin size={32}/>
                </div>
            </div>
            
            <div className="flex-beetwen">
                <div>
                    <p>Institucional</p>
                    <div className="flex-column">
                        <a href="/">Quem somos</a>
                        <a href="/">O que fazemos</a>
                        <a href="/">Onde nos localizamos</a>
                        <a href="/">Biocampeiro</a>
                    </div>
                </div>
                <div >
                    <p>Contato</p>
                    <div className="flex-column">
                        <a href="/">Biocampeiro</a>
                        <a href="/">Biocampeiro</a>
                        <a href="/">Biocampeiro</a>
                        <a href="/">Biocampeiro</a>
                    </div>
                </div>
                <div >
                    <p>Nossos projetos</p>
                    <div className="flex-column">
                        <a href="/">Biocampeiro</a>
                        <a href="/">Biocampeiro</a>
                        <a href="/">Biocampeiro</a>
                        <a href="/">Biocampeiro</a>
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
