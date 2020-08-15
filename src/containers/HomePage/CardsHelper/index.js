import React from "react";

import { Container, Card, Picture } from "./styles";
import { Link } from "react-router-dom";

import ManSearch from "../../../assets/ManSearch.png";
import Cesta from "../../../assets/Cesta.png";

function CardsHelper() {
  return (
    <Container className="max-margin-width">
      <div className="flextop">
        <Card>
          <Link to="/cesta">
            <Picture src={Cesta} />
          </Link>
        </Card>
        <Card>
          <Link to="/user/orders">
            <Picture src={ManSearch} />
          </Link>
        </Card>
      </div>
    </Container>
  );
}

export default CardsHelper;
