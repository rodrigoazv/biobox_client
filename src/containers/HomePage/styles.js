import styled from "styled-components";

export const Section = styled.section`
 
`;
export const Container = styled.div`
  .main-section {
    border-top: none;
  }
  .general-banner {
    background-repeat: no-repeat;
    background-position: center top;
    @media (max-width: 500px) {
      display: none;
    }
  }
  .general-banner-mobile {
    background-repeat: no-repeat;
    background-position: center top;
    @media (min-width: 500px) {
      display: none;
    }
  }
  .product-hole {
    width: auto;
    padding: 10px 0;
    margin: 0 40px;
    text-align: center!important;
    @media (max-width: 720px) {
      margin: 0 0px;
    }
  }
  .information-hole {
    width: 100%;
    text-align: center;
  }
  .banner-response {
    max-width: 100%;
    margin: auto;
  }
  .paddingup {
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 15px;
    @media (max-width: 850px) {
      margin: 0 2px;
    }
  }

  .product-type {
    height: auto;
    margin-top: 20px;
  }
  .product-type-name {
    border-bottom: 2px solid #816a5a;
    font-size: 1.61667rem;
    font-weight: 200;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 50px;
    margin-bottom: 25px;
    color: #816a5a;
  }
  .info-box {
    position: initial;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 850px) {
      text-align: center;
      flex-direction: column;
      margin: auto;
      justify-content: center;
      align-items: center;
    }
  }
  .info-box-content {
    padding: 30px 20px;
    margin: 1%;
    background: #FEF4D6;
    color: #493c24;
    border-radius: 8px;
    text-align: center;
    width: 21.5vw;
    @media (max-width: 850px) {
      width: 80vw;
    }
    p {
      text-align: left;
      @media (max-width: 850px) {
        text-align: center;
      }
    }
  }
  .info-box-phrase {
    margin: 14px;
    text-align: left;
    h1 {
      font-size: 35px;
    }
    p{
      margin-top : 30px;
      font-size: 25px;
    }
  }
  .info-box-inner p {
    padding: 100px;
    font-size: 18px;
    @media (max-width: 770px) {
      padding: 5px;
      text-align: center;
    }
  }

  .info-stripe {
    width: 100%;
    color: white;
    background: #311f17;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-box-content img {
    margin: auto;
    width: 200px;
    @media (max-width: 1024px) {
      margin: auto;
      width: 170px;
    }
  }
  .info-box-inner {
    display: flex;
    flex-direction: row;
    text-align: center;
    @media (max-width: 770px) {
      flex-direction: column;
    }
  }
  .padding-slick {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
