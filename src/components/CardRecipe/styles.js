import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    width: 350px;
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.46);
    box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.46);
    background-color:white;
    border-radius: 8px;
  .card-content{
    padding:2.5%;
  }
  .card-content img{
    width:300px;
    @media (max-width: 770px){
        width:290px;
    } 
  }
  .recipe-info{
    margin: 0 auto;
    text-align: center;
  }
  .recipe-title{
    color: #333;
    font-size: 20   px;
  }
  .recipe-description{
    color: #333;
    font-size: 15px;
    font-weight: 300;
  }
 
  .align-button{
      align-items:center;
      width:100%;
  }
  .align-figure{
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
 .button-pop:hover{
   width:260px;
 }
`;
