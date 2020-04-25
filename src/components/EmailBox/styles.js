import styled from 'styled-components';

export const Container = styled.div`
  .email-box{
        margin-top: 50px;
        margin-bottom:50px;
        background-color:#95B737;
        border-radius:24px;
        @media (max-width: 984px){
          margin:10px;
        
      }
  }
  .width-x2{
    padding:50px 20px 50px 20px;
    width:50%;
    @media (max-width: 984px){
        width: 90%;
        padding:25px 10px 25px 10px;
      }
  }
  .width-x1{
    width:100%;
    margin: 10px;
  }
  .align-horizontal{
      align-items: center;
      height:100%;
      margin: auto 0px;
  }
  h1{
      color:white;
      font-size:40px;
  }
  .flex-row{
      display:flex;
      flex-direction:row;
      @media (max-width: 984px){
        flex-direction:column;
        align-items: center;
        
      }
  }
  p{
      font-size: 20px;
      color:white;
  }
`;
