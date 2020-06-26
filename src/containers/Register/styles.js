import styled from 'styled-components';

export const Container = styled.div`
  .box-form{
      border-top: 1px solid #A4A4A4;
      
  }
  .form-type-register{
      display:flex;
      flex-direction: column;
      width: 500px;
      text-align:left; 
      @media (max-width: 520px){
            width: 310px;
    } 
  }
  .flex-sexo{
    display:flex;
  }
  .flex-sexo span{
    padding:2px;
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
  .use-terms{
    text-align-last: left;
    margin-top: 16px;
    margin-bottom: 26px;
    color: #162c38;
  }
  .use-terms p{
    color: green;
    cursor:pointer;
  }
  span{
      margin-left: 1px;
  }
  
  label{
    padding: 0 5px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:gray;
  }
`;
