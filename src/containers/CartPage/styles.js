import styled from "styled-components";

export const Container = styled.div`
  .tag-list {
    width: 100%;
    margin: 10px 0;
    font-size: 17px;
    text-align: left;
    font-family: "Kreon", cursive;
    img {
      height: 32px;
    }
    td {
      align-items: center;
      padding: 2px 0;
      border-bottom: 1px dashed #f3f3f3;
    }
    th {
      align-items: center;
      color: #fff;
      padding: 2px 4px;
      font-weight: 200;
      background: #7fbc44;
    }
  }
  .display-none-test{
    @media (max-width: 600px){
      display:none;
    }
  }
  .margin-align {
    margin-top: 40px;
    margin-bottom: 200px;
  }
  .display-flex-cart {
    display: flex;
  }
  .cart-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }

  .box-product li {
    border-bottom: 1px solid #ddd;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-weight: 100;
    font-size: 15px;
    margin: 0 0 10px 0;
  }
  h4 {
    font-size: 13px;
    font-weight: 500;
    color: #333;
  }
  /* BOX DE CHECKOUT */

  .box-checkout {
    width: 250px;
    border-radius: 10px;
    border: 1px solid #ddd;
    padding: 25px;
  }

  /* BOX DE CHECKOUT */
  .display-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-product {
    display: flex;
    flex-direction: column;
    width: 60%;
    @media (max-width: 720px) {
      width: 100%;
    }
  }
  .cart-photo {
    height: 30px;
    margin: 5px;
  }
  .flex-end {
    padding-right: 50px;
    @media (max-width: 720px) {
      padding: 10px;
    }
  }
  .mini-button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  .mini-button:hover {
    opacity: 0.8;
    color: red;
  }
`;
