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
     background-color: #FFFAF5;
     padding: 10%;

  }
  
  
`;
