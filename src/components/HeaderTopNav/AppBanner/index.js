import React from "react";

import { Container } from "./styles";
import { GoX } from "react-icons/go";

function AppBanner() {

function closeSign (){
let sign = document.getElementById("info-sign")
sign.classList.add("closed-sign")
}
  
  return (
    <div id="info-sign">
    <Container>
      
      <button  onClick={closeSign} >
        <GoX size={20} color={"#fff"} />
      </button>
      <div>COVID-19: Estamos entregando com toda segurança! </div>
      
    </Container>
    </div>
  );
}

export default AppBanner;
