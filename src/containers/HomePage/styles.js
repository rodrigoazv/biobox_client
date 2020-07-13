import styled from 'styled-components';

export const Container = styled.div`
    .main-section{
        border-top:none;
    }
    .general-banner{
        background-repeat:no-repeat;
        background-position:center top;
    }
    .banner-response{
        max-width:100%;
        margin:auto;
    }
    .paddingup{
        padding-top:10px;
        padding-bottom:10px;
    }

    .product-hole{
        width: auto;
        padding: 4.16667rem 0;
        margin: 0;
    }
    .product-type{
        height: auto;
        margin-top: 20px;
    }
    .product-type-name{
        border-bottom: .08333rem solid #A4A4A4;
        font-size: 1.41667rem;
        font-weight: 600;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        text-align: center;
        margin-top:50px;
        margin-bottom:25px;
  }
    .info-box{
        position:initial;
        margin-top: 50px;
        margin-bottom:50px;
        border-radius: 24px;
        display:flex;
        padding:2%;
        @media (max-width: 850px){
         text-align:center;
         flex-direction: column;
         margin: auto;
         justify-content: center;
         align-items:center;
    } 
        
  }
  .info-box-content{
      padding:2%;
      margin:1%;
      background: #F0F0F0;
      border-radius:24px;
      width:21.5vw;
      text-align:center;
      @media (max-width: 850px){
         width:80vw;
    } 
     
  }
  .info-box-phrase{
      padding:2vh;
      margin:2%;
      border-radius:5px;
      width:70vw;
     
  }
  .info-box-inner p{
      padding:100px;
      font-size: 18px;
      @media (max-width: 770px){
        padding:5px;
        text-align:center;
    }
  }
  .info-box-phrase h1{
    font-size:25px;
      
  }
  .info-stripe{
      width:100%;
      color:white;
      background: #311F17;
      height:55px;
      border-radius:3.5px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top: 0.5%;
  }
   .info-box-content img{
      margin:auto;
      width:200px;
      @media (max-width: 1024px){
        margin:auto;
        width:170px;
        
         
    } 
  }
  .info-box-inner{
      display:flex;
      flex-direction:row;
      text-align:center;
      @media (max-width: 770px){
        flex-direction:column
    } 

  }
  .padding-slick{
      margin-top:25px;
      margin-bottom:25px;
  }
`;
