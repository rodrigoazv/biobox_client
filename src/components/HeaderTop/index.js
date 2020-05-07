import React from 'react';

import { Container } from './styles';
import "../../styles/colors";

//assets import
import Logo from '../../assets/logobio.svg';

export default function HeaderTop() {
    
    return (
        <Container className="top-nav-sizing">
            <div className="max-margin">
                    <div >
                        <div className= "nav-elements">
                            <a href="/">
                                <img src={Logo} alt="none" className="logo-sizing"/>
                            </a>
                            <a className="back-home" href="/"> Voltar Para o Início</a>
                        </div>
                    </div>
                </div>
               
              
        </Container>
  );
}
