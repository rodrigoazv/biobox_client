import styled from 'styled-components';

export const Container = styled.div`
  
  .end-content{
      margin-top: 50px;
      width:100%;
      border-radius:4px;
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items: center;  
  }
  .box-end{
    text-align: center;
  }
  .box-end img{
      width: 300px;
      @media (max-width: 520px){
            width: 200px;
    } 

  }
  .box-end-content{
    width:85%;
     text-align:center;
     margin:auto;
     background-color: #F0F0F0;;

     padding: 10%;

  }
  .display-flex-cart{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .box-product{
    display: flex;
    flex-direction:column;
    width:60%;
    @media (max-width: 720px) {
      width:100%;
  }
  }
  .box-product li{
    border-bottom: 1px solid #ddd;
    margin-top: 20px;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
   }
   .cart-photo{
    height:30px;
    width: 30px!important;
    margin:5px;
  }
  .flex-end{
    padding-right: 50px;
    @media (max-width: 720px) {
      padding: 10px;
    }
  }
  
`;
