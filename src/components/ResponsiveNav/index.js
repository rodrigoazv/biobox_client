import React from 'react';

import { Container } from './styles';
import {Link} from 'react-router-dom'
//assets
import Logo from '../../assets/logobio.svg';



export default function ResponsiveNav() {
  return (
    <Container>
      <div id="nav-full" className="nav-container">
        <div className="nav-box ">
          <div>
            <div>
              <img className="responsive-logo" alt="" src={Logo} />
            </div>
            <nav>
              <ul className="responsive-menu">
                <li><Link to="/bioprodutos">Produtos</Link></li>
                <li><Link to="/receitas">Receitas</Link></li>
                <li><Link to="/sobre-nos">Sobre nós</Link></li>
                <li><Link to="/biocabanas">Biocabanas</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </nav>
          </div>
          
        </div>
        <button className="close-nav">X</button>
      </div>

    </Container>
  )
}
