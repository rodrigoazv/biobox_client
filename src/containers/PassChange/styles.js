import styled from 'styled-components';

export const Container = styled.div`
  
  .pass-content{
      margin-top: 50px;
      width:100%;
      border-radius:4px;
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items: center;  
  }
  .box-pass{
    text-align: center;
  }
  .box-pass img{
      width: 300px;
      @media (max-width: 520px){
            width: 200px;
    } 

  }
  .box-pass-content{
    width:85%;
     text-align:center;
     margin:auto;
     background-color: rgb(270, 240, 245);
     padding: 10%;

  }
  
  
`;
