import styled from 'styled-components';

export const Container = styled.div`
  
 
  .about-content{
      margin-top: 50px;
      width:100%;
      display: flex;
      justify-content: space-between;
      flex-direction:column;
      align-items: center;  
  }
  .about-section{
    border-top: 1px solid #A4A4A4;
  }
  .about-box{
    display:flex;
    flex-direction: row;
    align-items:center;
    font-size:15px;
    margin-top: 1%;
    @media (max-width: 770px){
        flex-direction:column
    } 
  }
  .about-title{
    margin-top: 5%;
  }
  .about-img-list{
    display:flex;
    flex-direction: row;
    text-align:center;
    justify-content:center;
   
  }
  .about-img-list li{
    margin-right:5%;
  }
  
  .about-img-list  img{
    width:70px;
    
  }
  
  .info-img img{
      width: 320px;
  }
    span{
      margin-left: 10px;
  }

`;
