import React from 'react';

import { Container } from './styles';
// Components
import HeaderTopNav  from '../../components/HeaderTopNav';
import CardProduct from '../../components/CardProduct';
//asssets
import Banner from '../../assets/banner.png';


export default function HomePage() {
  return (
    <Container>
      <HeaderTopNav/>
      <section className="main-section">
        <div>
          <a href='/'>
            <img src={Banner} alt="banner" className="banner-response"/>
          </a>
        </div>
        <div className="product-hole">
          <section className="product-type max-margin-width">
              <div className="product-type-name">HORTA</div>
              <ul className="padding-ul">
                <li>
                  <CardProduct/>
                </li>
                <li>
                  <CardProduct/>
                </li>
                <li>
                  <CardProduct/>
                </li>
                <li>
                  <CardProduct/>
                </li>
              </ul>
          </section>
          <section className="product-type max-margin-width">
              <div className="product-type-name">GRANEL</div>
              <ul className="padding-ul">
                <li>
                  <CardProduct/>
                </li>
              </ul>
          </section>
          <section className="product-type max-margin-width">
              <div className="product-type-name">BIOPRODUTOS</div>
              <ul className="padding-ul">
                  <li>
                    <CardProduct/>
                  </li>
              </ul>
          </section>
          <div className="info-box max-margin-width">

          </div>

          <div>
            <a href='/'>
              <img src={Banner} alt="banner" className="banner-response"/>
            </a>
           </div>

          <div className="email-box max-margin-width">
              
          </div>
        </div>
      </section>
    </Container>
  );
}
