import styled from "styled-components";

export const Container = styled.div`
  .end-content {
    margin-top: 50px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box-end {
    text-align: center;
  }
  .box-end img {
    width: 300px;
    @media (max-width: 520px) {
      width: 200px;
    }
  }
  .box-end-content {
    margin: 50px auto;
    width: 70%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
      color: rgb(75, 75, 75);
      font-size: 36px;
      line-height: 48px;
    }
    p{
      color:#816a5a;
    }
  }
  .width-2x {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .margin-low {
    margin: 10px 0;
  }
  tr {
    border-bottom: 1px solid #816a5a;
    text-align: left;
  }
  .right {
    text-align: right;
  }
  table {
    width: 100%;
  }
  .display-flex-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
  }
  .box-product {
    border-top: 3px solid #816a5a;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 20px auto;
    @media (max-width: 720px) {
      width: 100%;
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
  .cart-photo {
    height: 30px;
    width: 30px !important;
    margin: 5px;
  }
  .flex-end {
    padding-right: 50px;
    @media (max-width: 720px) {
      padding: 10px;
    }
  }
`;
