import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    width: 250px;
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.46);
    box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.46);
    background-color:white;
  border-radius: 8px;
  .product-info{
    width: 14.5rem;
    margin: 0 auto;
    text-align: center;
  }
  .product-name{
    color: #333;
    font-size: 20   px;
  }
  .product-description{
    color: #333;
    font-size: 15px;
    font-weight: 300;
  }
  .product-price{
    width:55%;
    color: green;
    font-weight: 600;
  }
  .align-button{
      align-items:center;
      width:100%;
  }
  .align-figure{
    width: 14.5rem;
    margin: 0 auto;
    text-align: center;
  }
  .size-product{
      align-items:center;
      height: 220px;
      
  }
  .padding-into{
      padding: 10px;
  }
  .flex-quant{
    margin-top: 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .button-type-quant{
     display: flex;
     width:100%;
  }
  .quantity{
      width:30%;
      border:none;
      text-align:center;
      background-color: #fff;
  }
  .button-quantity{
    color: black;
    font-weight:600;
    padding: 8px 16px;
    border-radius:100px;
    background-color:white;
  }
`;
