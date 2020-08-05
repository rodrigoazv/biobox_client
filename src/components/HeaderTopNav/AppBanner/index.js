import React from "react";

import { Container } from "./styles";
import { GoX } from "react-icons/go";

function AppBanner() {
  
  return (
    <Container>
      <button >
        <GoX size={20} color={"#fff"} />
      </button>
      <div>COVID-19: Estamos entregando com toda segurança! </div>
    </Container>
  );
}

export default AppBanner;
