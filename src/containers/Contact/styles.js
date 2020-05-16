import styled from 'styled-components';

export const Container = styled.div`
  .box-form{
      border-top: 1px solid #A4A4A4;
  }
  .form-type-register{
      display:flex;
      flex-direction: column;
      width: 650px;
      align-items:center;  
      @media (max-width: 700px){
            width: 310px;
    } 
  }
  .text-contact-message{
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 150px;
    margin: 10px 0;
    padding: .5em .5rem .5rem 2rem;
    border: 1px #A4A4A4 solid;
    border-radius: 10px;
    outline:none;
    background-color: #fff;
  }
  .text-cad{
      color:#333;
      margin:15px;
  }
  .content{
      margin-top: 50px;
      margin-bottom:50px;
      width:100%;
      padding:0 96px 96px 96px  ;
      border-radius:8px;
      background:#F0F0F0;
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
