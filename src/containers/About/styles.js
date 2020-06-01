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
    padding:2.5%;
    @media (max-width: 770px){
        flex-direction:column
    } 
  }
  .about-box p{
    padding: 2.5%;
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
  .about-imgs li{
    padding: 5%;
    width:110px;
  }
  
  
  .about-img-list  img{
    width:70px;
    
    
  }
  
  .info-img img{
      width: 320px;
  }
    

`;
