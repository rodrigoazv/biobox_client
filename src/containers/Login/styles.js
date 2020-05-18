import styled from 'styled-components';

export const Container = styled.div`
  .box-form{
      border-top: 1px solid #A4A4A4;
  }
  .box-form h4{
    margin-top:15px;
  }
  .form-type-register{
      display:flex;
      flex-direction: column;
      width: 500px;
      align-items:center;  
      @media (max-width: 520px){
            width: 310px;
    } 
  }
  .text-cad{
      color:#333;
      margin:15px;
  }
  .content{
      margin-top: 50px;
      width:100%;
      padding:0 96px 96px 96px  ;

      border-radius:4px;

      display: flex;
      justify-content: space-between;
      flex-direction:column;
      text-align: center;
      align-items: center;  
  }
    span{
      margin-left: 10px;
  }
`;
