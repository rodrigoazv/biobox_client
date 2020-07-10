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
        height: 300px;
        background-color:#F0F0F0;
        border-radius: 24px;
        display:flex;
        @media (max-width: 770px){
          text-align:center;
          height:400px;
          margin-left: 5px;
          margin-right: 5px;
    } 
        
  }
  .info-box-content{
      padding:5vh;
  }
  .info-box-inner p{
      padding:100px;
      font-size: 18px;
      @media (max-width: 770px){
        padding:5px;
        text-align:center;
    }
      
  }
  .info-box-content img{
      margin-top:0;
      width:200px;
      @media (max-width: 770px){
        margin:auto;
         
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
