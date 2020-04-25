import React from 'react';

import { Container } from './styles';

//assets import
import Logo from '../../assets/logobio.svg';
import { FaStore } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

export default function HeaderTopNav() {
  return (
    <Container className="top-nav-sizing">
        <div className="max-margin">
                <div className= "nav-elements-mother">
                    <div>
                        <a href="/">
                            <img src={Logo} alt="none" className="logo-sizing"/>
                        </a>
                    </div>
                    <div className="searchBar">
                        <form className="max-margin">
                            <div className="inputWithIcon">
                                <input className="input" type="text" placeholder="Procurando algo ?"/>
                                <FaSearch size={16}aria-hidden="true"/> 
                            </div>
                        </form>
                    </div>
                    <div>
                        <a href="/Login" color="#333">
                            Entre ou cadastre-se
                        </a>    
                    </div>
                    <a href="/cart"> 
                        <FaStore size={48} color="green"/>
                    </a>
                </div>
            </div>
            <div className="under-nav-top">
                    <nav className="max-margin">
                        <ul>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                </nav>
            </div>
    </Container>
  );
}
