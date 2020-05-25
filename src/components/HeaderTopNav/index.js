import React,{useState} from 'react';

import { Container } from './styles';
import {Link, useHistory} from 'react-router-dom';
import "../../styles/colors";

//assets import
import Logo from '../../assets/logobio.svg';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { FaSignInAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaGripLines} from 'react-icons/fa';

import { useSelector } from 'react-redux';

export default function HeaderTopNav() {
    const [search, setSerch] = useState();
    const history = useHistory();
    
    const length = useSelector(state => state.cart.length);
    const {isAuthenticated} = useSelector(state => state.authe);

    
    function HandleSearch(e){
        e.preventDefault();
        history.push(`product/${search}`)
    }
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
                                    <input 
                                        className="input" 
                                        type="text" 
                                        placeholder="Procurando algo ?" 
                                        onChange={(e) => setSerch(e.target.value)}
                                    />
                                    
                                        <FaSearch size={16}aria-hidden="true" onClick={HandleSearch}/>
                                    
                                </div>
                            </form>
                        </div>
                        { isAuthenticated ? ( 
                                <div className="display-show">
                                <p>Olá    
                                    <a href='/'>
                                        @Name, 
                                    </a> 
                                </p>  
                                <p>Boas compras</p>   
                            </div> 
                            ) : (
                                <div className="display-show">
                                <a href="/login">
                                    Entre </a>
                                <span>ou </span>
                                <a href="/register">
                                    cadastre-se
                                </a>    
                            </div>
                            )
                           
                        }
                        
                        <div className="display-show">
                                <Link to="/cart"> 
                                    <RiShoppingBasketLine size={36} color='#95B737'/>
                                    <span>{length}</span>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="under-nav-top">
                        <nav className="max-margin">
                            <ul>
                                <li><a href="/bioprodutos">Produtos</a></li>
                                <li><a href="/receitas">Receitas</a></li>
                                <li><a href="/sobre-nos">Sobre nós</a></li>
                                <li><a href="/biocabanas">Biocabanas</a></li>
                                <li><a href="/contato">Contato</a></li>
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
                                            <RiShoppingBasketLine size={32} color='PRIMARY_GREN_LIGHT'/>
                                        </a>    
                                    </div>
                                </li>
                            </ul>
                    </nav>
                </div>
        </Container>
  );
}
