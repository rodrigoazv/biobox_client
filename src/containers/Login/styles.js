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
  h4{
    font-weight: 100;
    color: #333;
    text-decoration: underline;
    
  }
  .text-cad{
      color:#333;
      margin:15px;
      text-align:center;
  }
  .content{
      width:100%;
      padding:0 96px 0 96px  ;
      border-radius:4px;
      display: flex;
      justify-content: space-between;
      flex-direction:column;
     
      align-items: center;  
  }
  .right{
    font-size: 15px;
    font-weight: 400;
    font-family: sans-serif;
    padding: 0 10px;
    text-decoration: underline;
    display:flex;
    justify-content: flex-end;
    color: #333;
  }
  span{
    margin-left: 1px;
  }
  
  label{
    align-items:left;
    padding: 0 5px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:gray;
  }
`;
