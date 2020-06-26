import React from 'react';

import { Container } from './styles';
import {Link} from 'react-router-dom'
//assets
import Logo from '../../assets/logobio.svg';



export default function ResponsiveNav() {
  return (
    <Container>
      <div id="terms-full" className="terms-container">
        <div className="terms-box ">
        <div>
          <div >
            <img className="responsive-logo" alt="" src={Logo} />
            <h2>Termos de Uso</h2>
         </div>
             <p>
                 1.0 Termos de Uso
                 Termos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos
                  de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de 
                  UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos
                   de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos de UsoTermos UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos Termos de UsoTermos
             </p>
          </div>  
          <button className="close-terms">Ok</button> 
              
        </div>
      
      </div>

    </Container>
  )
}
