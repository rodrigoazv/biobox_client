import React from "react";

import { Container, Card, Picture } from "./styles";
import { Link } from "react-router-dom";

//aos
import AOS from "aos";
import "aos/dist/aos.css";

import ManSearch from "../../../assets/ManSearch.png";
import Cesta from "../../../assets/Cesta.png";

function CardsHelper() {
    //Animation on Scroll init
    AOS.init();
  return (
    <Container className="max-margin-width" >
      <div className="flextop">
        <Card data-aos="fade-up" data-aos-duration="1000">
          <Link to="/cesta">
            <Picture src={Cesta} />
          </Link>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1000">
          <Link to="/user/orders">
            <Picture src={ManSearch} />
          </Link>
        </Card>
      </div>
    </Container>
  );
}

export default CardsHelper;
