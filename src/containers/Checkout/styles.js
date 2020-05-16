import styled from 'styled-components';

export const Container = styled.div`
  margin:0;
  .background-h2{
      background-color:#95B737;
      font-weight: 700;
      color:#fff;
      font-size:20px;
      padding: 3px 0 3px 15px;
      border-radius:5px;   
  }
  .flex-form{
      display:flex;
  }
  .box-checkout{
    width: 30%;
    border-radius:10px;
    border: 1px solid #ddd;
    padding: 25px;
  }
  .form-margin-width{
      width: 33%;
      padding-right: 50px;
      margin-bottom:15px;
    
  }
  .input-margin{
      margin-top:10px;
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
`;
