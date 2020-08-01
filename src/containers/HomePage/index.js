import React, { useEffect } from "react";

import { Container, Section } from "./styles";
// Components
import HeaderTopNav from "../../components/HeaderTopNav";
import CardProduct from "../../components/CardProduct";
import EmailBox from "../../components/EmailBox";
import Footer from "../../components/Footer";
import ResponsiveNav from "../../components/ResponsiveNav";
//asssets
import Banner from "../../assets/banner.png";
import BannerResponsive from "../../assets/Banner@2x.png";
import BannerFood from "../../assets/BannerFood.png";
import InfoBio1 from "../../assets/InfoBio1.svg";
import Modal from "../../components/Modal";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
//materuakUi
import Skeleton from "@material-ui/lab/Skeleton";
//import api from '../../service/api';

import { useSelector, useDispatch } from "react-redux";
import { getAllCategory, getAllProducts} from "../../store/fetchProduct";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  //Animation on Scroll init
  AOS.init();
  //reducer getProducts from api
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() =>{
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
      <main className="main-section">
        <Section className="general-banner">
          <a href="/sobre-nos">
            <img src={Banner} alt="banner" className="banner-response" />
          </a>
        </Section>
        <div className="general-banner-mobile">
          <a href="/sobre-nos">
            <img src={BannerResponsive} alt="banner" className="banner-response" />
          </a>
        </div>
        <Section className="information-hole">
          <div className="info-stripe max-margin-width">
            <p
              data-aos="zoom"
              data-aos-delay="20"
              data-aos-duration="200"
              data-aos-once="false"
              data-aos-offset="-150"
              data-aos-anchor-placement="top-center"
            >
              Frete Grátis
            </p>
            <p
              data-aos="zoom"
              data-aos-delay="150"
              data-aos-duration="220"
              data-aos-once="false"
              data-aos-offset="-150"
              data-aos-anchor-placement="top-center"
            >
              Entrega em Taperoá-BA
            </p>
            <p
              data-aos="zoom"
              data-aos-delay="250"
              data-aos-duration="320"
              data-aos-once="false"
              data-aos-offset="-150"
              data-aos-anchor-placement="top-center"
            >
              Produtos colhidos 1 dia antes
            </p>
          </div>
        </Section>
        <Section className="product-hole">
          {category.length !== 0 ? (
            category.map((categoria) => (
              <section className="product-type max-margin-width" key={categoria.id}>
                <div className="product-type-name">{categoria.name}</div>
                <div className="padding-slick">
                  <ul>
                    {categoria.product.length !== 0 ? (
                      <Slider {...settings}>
                        {categoria.product.map((products) => (
                          <li key={products.id} className="paddingup">
                            <CardProduct props={products} />
                          </li>
                        ))}
                      </Slider>
                    ) : (
                      <Skeleton variant="rect" width={165} height={200} />
                    )}
                  </ul>
                </div>
              </section>
            ))
          ) : (
            <section className="product-type max-margin-width display-flex-row">
               <Skeleton variant="rect" width={165} height={200} />
               <Skeleton variant="rect" width={165} height={200} />
               <Skeleton variant="rect" width={165} height={200} />
               <Skeleton variant="rect" width={165} height={200} />
               <Skeleton variant="rect" width={165} height={200} />
          </section>
           
          )}

          <div className="info-box max-margin-width">
            <div className="info-box-phrase">
              <h1>Porque nós fazemos o que fazemos?</h1>
              <p>Entenda nossa filosofia e junte-se à família Biocampeiro</p>
            </div>
            <div
              data-aos="fade-up"
              className="info-box-content"
            >
              <img alt="Info-Bio" src={InfoBio1}></img>
              <p>1.Alimentar você de forma limpa e sem agrotóxicos</p>
            </div>
            <div
              data-aos="fade-up"
              className="info-box-content"
            >
              <img alt="Info-Bio" src={InfoBio1}></img>
              <p>2.Ajudar o pequeno agricultor no seu desenvolvimento</p>
            </div>
            <div
              data-aos="fade-up"
              className="info-box-content"
            >
              <img alt="Info-Bio" src={InfoBio1}></img>
              <p>3.Levar sua feira até você, sem complicações</p>
            </div>
          </div>

          <div>
            <a href="/">
              <img src={BannerFood} alt="banner" className="banner-response" />
            </a>
          </div>

          <EmailBox />
        </Section>
      </main>
      <ResponsiveNav />

      <Modal text="Produto adicionado ao Carrinho" />
      <Footer />
    </Container>
  );
}
