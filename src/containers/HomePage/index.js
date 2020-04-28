import React from 'react';

import { Container } from './styles';
// Components
import HeaderTopNav from '../../components/HeaderTopNav';
import CardProduct from '../../components/CardProduct';
import EmailBox from '../../components/EmailBox';
import Footer from '../../components/Footer';
//asssets
import Banner from '../../assets/banner.png';
import InfoBio1 from '../../assets/InfoBio1.svg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <HeaderTopNav />
      <section className="main-section">
        <div>
          <a href='/sobre-nos'>
            <img src={Banner} alt="banner" className="banner-response" />
          </a>
        </div>
        <div className="product-hole">
          <section className="product-type max-margin-width">
            <div className="product-type-name">HORTA</div>
            <div className="padding-slick">
              <Slider {...settings}>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
                <div>
                  <CardProduct />
                </div>
              </Slider>

            </div>
          </section>
          <section className="product-type max-margin-width">
            <div className="product-type-name">GRANEL</div>
            <ul className="padding-ul">
              <li>
                <CardProduct />
              </li>
            </ul>
          </section>
          <section className="product-type max-margin-width">
            <div className="product-type-name">BIOPRODUTOS</div>
            <ul className="padding-ul">
              <li>
                <CardProduct />
              </li>
            </ul>
          </section>
          <div className="info-box max-margin-width">
            <div className="info-box-content">
              <h1>Porque nós fazemos o que fazemos?</h1>
              <div className="info-box-inner">
                <p>1.Alimentar você de forma limpa e sem agrotóxicos</p>
                <img alt="Info-Bio" src={InfoBio1}></img>
                <p>2.Ajudar o pequeno agricultor</p>
              </div>
            </div>

          </div>

          <div>
            <a href='/'>
              <img src={Banner} alt="banner" className="banner-response" />
            </a>
          </div>

          <EmailBox />

        </div>
      </section>
      <Footer />
    </Container>
  );
}
