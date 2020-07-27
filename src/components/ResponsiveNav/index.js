import React from 'react';

import { Container } from './styles';
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
                <li><a href="/bioprodutos">Produtos</a></li>
                <li><a href="/receitas">Receitas</a></li>
                <li><a href="/sobre-nos">Sobre nós</a></li>
                <li><a href="/biocabanas">Biocabanas</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </nav>
          </div>
          
        </div>
        <button className="close-nav">X</button>
      </div>

    </Container>
  )
}
