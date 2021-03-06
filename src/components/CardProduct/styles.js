import styled from "styled-components";

export const Container = styled.div`

  @media (max-width: 850px) {
    width: 154px;
  }
  height: auto;
  width: 220px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #d7ccc8;
  transition: 0.2s;
  text-align: center;
  :hover {
    box-shadow: 0 2px 4px 0 rgba(192, 208, 230, 0.9);
  }

  .product-info {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .product-name {
    color: #333;
    margin: 10px 0;
    height: 32px;
    font-size: 0.81rem;
    font-weight: 500;
    font-family: sans-serif;
  }
  .button-margin {
    width: 100%;
    margin: 10px auto;
  }
  .product-description {
    color: #333;
    font-size: 15px;
    font-weight: 300;
  }
  .price-product-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 92%;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }
  .product-price {
    color: #333;
    font-size: 20px;
    font-weight: 600;
  }
  .align-button {
    align-items: center;
    width: 100%;
  }
  .align-figure {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    position: relative;
    margin: 0 auto;
  }

  .size-product {
    display: inline-block;
    height: 198px;
    @media (max-width: 850px) {
      height: 105px;
    }
    :hover{
      transform: scale(1.02);
    }
  }
  .padding-into {
    padding: 8px;
  }
  .flex-quant {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-type-quant {
    display: flex;
    width: 100%;
  }
  .quantity {
    width: 30%;
    border: none;
    text-align: center;
    background-color: #fff;
  }
  .notReady-message{
        border: 1px solid red;
        border-radius:  4px;
        margin: 5%;
        padding: 2%;
        text-align:center;
    }
    .notReady-message p{
        color:red;
        font-size:12px;
    }
  
  .off-price {
    height: 11px;
    left: 1427px;
    top: 1257px;

    font-family: sans-serif;
    font-size: 10px;
    line-height: 11px;
    text-decoration-line: line-through;

    color: #7b7b7b;
  }
  .off-price-style {
    width: 35px;
    height: 8px;
    font-family: sans-serif;
    font-size: 9px;
    background: #ff7a00;
    border-radius: 2px;
    color: #fff;
    padding: 2px 5px;
    margin: 0 0 0 2px;
  }
`;
