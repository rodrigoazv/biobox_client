import React from 'react';

import { Container } from './styles';
import "../../styles/colors";
import {Link} from 'react-router-dom';

//assets import
import Logo from '../../assets/logobio.svg';

export default function HeaderTop() {
    
    return (
        <Container className="top-nav-sizing">
            <div id="menu-fixed">
                <div id="nav-fixed">
                <div className="max-margin">
                    <div >
                        <div className= "nav-elements">
                            <Link to="/">
                                <img src={Logo} alt="none" className="logo-sizing"/>
                            </Link>
                            <a className="back-home" href="/"> Voltar Para o Início</a>
                        </div>
                    
                    </div>
                </div>

                </div>
            

            </div>
           
               
              
        </Container>
  );
}
