import React, { useEffect } from 'react';

import { Container } from './styles';
// Components
import HeaderTopNav from '../../components/HeaderTopNav';
import CardProduct from '../../components/CardProduct';
import EmailBox from '../../components/EmailBox';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
//asssets
import Banner from '../../assets/banner.png';
import BannerFood from '../../assets/BannerFood.png'
import InfoBio1 from '../../assets/InfoBio1.svg'
import Modal from '../../components/Modal';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';
//import api from '../../service/api';

import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/fetchProduct';


export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
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

  //reducer getProducts from api
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  //reducer addProducts in cart

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Biocampeiro - Homepage</title>
        <link rel="canonical" href="http://biocampeiro.com.br" />
      </Helmet>
      <HeaderTopNav />
      <section className="main-section">
        <div>
          <a href='/sobre-nos'>
            <img src={Banner} alt="banner" className="banner-response" />
          </a>
          <div className="info-stripe max-margin-width">
            <p>Frete Grátis</p>
            <p>Entrega em Taperoá-BA</p>
            <p>Produtos colhidos 1 dia antes</p>
          </div>
        </div>
        <div className="product-hole">
          <section className="product-type max-margin-width">
            <div className="product-type-name">HORTA</div>
            <div className="padding-slick">
              <ul>
                {products.length !== 0 ? (
                  <Slider {...settings}>
                    {products.map(product => (
                      <li key={product.id} className="paddingup">
                        <CardProduct
                          props={product}
                        />
                      </li>
                    ))}
                  </Slider>) : (<p>Sem produtos nessa categoria, por enquanto ! </p>)}

              </ul>
            </div>
          </section>
          <section className="product-type max-margin-width">
            <div className="product-type-name">GRANEL</div>
            <ul className="padding-ul">
              {products.length !== 0 ? (
                <Slider {...settings}>
                  {products.map(product => (
                    <li key={product.id} className="paddingup">
                      <CardProduct
                        props={product}
                      />
                    </li>
                  ))}
                </Slider>) : (<p>Sem produtos nessa categoria, por enquanto ! </p>)}
            </ul>
          </section>
          <section className="product-type max-margin-width">
            <div className="product-type-name">BIOPRODUTOS</div>
            <ul className="padding-ul">
              {products.length !== 0
                ? (<Slider {...settings}>
                  {products.map(product => (
                    <li key={product.id} className="paddingup">
                      <CardProduct
                        props={product}
                      />
                    </li>
                  ))}
                </Slider>)
                : (<p>Sem produtos nessa categoria, por enquanto ! </p>)
              }
            </ul>
          </section>
          <div className="info-box max-margin-width">
            <div className="info-box-phrase">
              <h1>Porque nós fazemos o que fazemos?</h1>
              <p>Entenda nossa filosofia e junte-se à família Biocampeiro</p>
            </div>
            <div className="info-box-content">
              <img alt="Info-Bio" src={InfoBio1}></img>
              <p>1.Alimentar você de forma limpa e sem agrotóxicos</p>
            </div>
            <div className="info-box-content">
              <img alt="Info-Bio" src={InfoBio1}></img>
              <p>2.Ajudar o pequeno agricultor no seu desenvolvimento</p>
            </div>
            <div className="info-box-content">
              <img alt="Info-Bio" src={InfoBio1}></img>
              <p>3.Levar sua feira até você, sem complicações</p>
            </div>

          </div>

          <div>
            <a href='/'>
              <img src={BannerFood} alt="banner" className="banner-response" />
            </a>
          </div>

          <EmailBox />

        </div>
      </section>
      <ResponsiveNav />
      <Modal text="Produto adicionado ao Carrinho" />
      <Footer />
    </Container>
  );
}
/*<div className="info-box-inner">
                <p>1.Alimentar você de forma limpa e sem agrotóxicos</p>
                <img alt="Info-Bio" src={InfoBio1}></img>
                <p>2.Ajudar o pequeno agricultor</p>
              </div>*/