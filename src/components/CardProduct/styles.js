import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    width: 250px;
    box-shadow: 0 1px 4px 0 rgba(192,208,230,.8);
    background-color:white;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    
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
  .price-product-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:80%;
  }
  .product-price{
    color: #95B737;
    font-size: 20px;
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
      width:220px;
      margin:0;
      
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
