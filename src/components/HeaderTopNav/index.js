import React from 'react';

import { Container } from './styles';

//assets import
import Logo from '../../assets/logobio.svg';

export default function HeaderTopNav() {
  return (
    <Container className="top-nav-sizing">
        <div className="max-margin">
            <div className= "nav-elements-mother">
                <div>
                    <a href="/">
                        <img src={Logo} alt="none"/>
                    </a>
                </div>
                <form>
                    <input/>
                </form>
                <div>
                    <a href="/Login">
                        Entre ou cadastre-se
                    </a>
                </div>
                <a href="/cart"> 
                    CardIcon
                </a>
            </div>
            <div className="under-nav-top">
                <nav className="nav-elements-mother">
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                </nav>
            </div>
        </div>
    </Container>
  );
}
