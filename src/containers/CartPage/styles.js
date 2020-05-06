import styled from 'styled-components';

export const Container = styled.div`
  .margin-align{
    margin-top:40px;
    margin-bottom: 200px;
  }
  .box-product li{
    border-bottom: 1px solid #ddd;
    margin-top: 20px;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;

  }
  p{
    font-size:12px;
    font-weight:300;
  }
  h4{
    font-size:13px;
    font-weight:500;
    color:#333;
  }
  /* BOX DE CHECKOUT */

  .box-checkout{
    width: 30%;
    border-radius:10px;
    border: 1px solid #ddd;
    padding: 25px;
  }


  /* BOX DE CHECKOUT */
  .display-flex{
    display:flex;
    flex-direction:row;
    justify-content:space-between
  }
  .box-product{
    display: flex;
    flex-direction:column;
    width:60%;
  }
  .cart-photo{
    height:30px;
    margin:5px;
  }
  .flex-end{
    padding-right: 50px;
  }
  .mini-button{
    background-color:transparent;
    border:0;
    cursor:pointer;
  }
  .mini-button:hover{
    opacity: 0.8;
    color:red;
  }
`;
