import React from 'react';

import { Container } from './styles';
import {Link} from 'react-router-dom';

//assets import
import Logo from '../../assets/logobio.svg';
import { FaStore } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaGripLines} from 'react-icons/fa';

import { useSelector } from 'react-redux';

export default function HeaderTopNav() {
    
    const length = useSelector(state => state.cart.length);

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
                        <div className="display-show">
                            <a href="/login">
                                Entre </a>
                            <span>ou </span>
                            <a href="/register">
                                cadastre-se
                            </a>    
                        </div>
                        <div className="display-show">
                                <Link to="/cart"> 
                                    <FaStore size={48} color="green"/>
                                    <span>{length}</span>
                                </Link>
                        </div>
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
                <div className="show-when-under-none">
                        <nav className="max-margin">
                            <ul>
                                <li>
                                    <div className='flex-icon'>
                                        <a href="/cart"> 
                                            <FaGripLines size={32} color="#333"/>
                                            
                                        </a>     
                                    </div>
                                </li>
                                <li>
                                    <div className='flex-icon'>
                                        <a href="/cart"> 
                                            <FaSignInAlt size={25} color="#333"/>
                                            
                                        </a>  
                                        Entre/cadastre-se    
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="/cart"> 
                                            <FaStore size={32} color="green"/>
                                        </a>    
                                    </div>
                                </li>
                            </ul>
                    </nav>
                </div>
        </Container>
  );
}
