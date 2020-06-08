import styled from 'styled-components';

export const Container = styled.div`
  margin:0;
  .background-h2{
      background-color:#95B737;
      font-weight: 100;
      color:#fff;
      font-size:20px;
      padding: 3px 0 3px 15px;
      border-radius:5px;   
  }
  .flex-form{
      display:flex;
  }
  .box-checkout{
    width: 50%;
    border-radius:10px;
    border: 1px solid #ddd;
    padding: 25px;
    max-width: 400px;
  }
  .form-adress{
    width:50%;
    padding-right:50px;
  }
  .form-margin-width{
      width: 33%;
      padding-right: 50px;
      margin-bottom:15px;
    
  }.form-margin-width-2x{
      width: 66%;
      margin-bottom:15px;
    
  }
  .form-submit{
    display:flex;
    justify-content: space-between;

  }
  .input-margin{
      margin-top:4px;
  } 
  .input-checkout{
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 30px;
    padding: .5em .5rem .5rem 2rem;
    border: 1px #A4A4A4 solid;
    border-radius: 5px;
    outline:none;
    background-color: white;
  }
  
  .button-change{
    padding: 3px;
    width:100%;
    color: grey;
    border:none;
    cursor: pointer;
  }
  .button-change:hover{
    color: green;
    cursor: pointer;
  }

  .input-checkout:hover{
    border: 2px #95B737 solid;

  }
  .input-checkout-autoload{
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 30px;
    padding: .5em .5rem .5rem 2rem;
    border: 1px #A4A4A4 solid;
    border-radius: 5px;
    outline:none;
    background-color: #F1F1F1;
  }
  .input-05{
    margin-left:5px;
  }
  label{
    padding: 0 5px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:gray;
  }
`;
