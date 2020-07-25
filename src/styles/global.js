import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font-family: 'Patua One', cursive;  
    background: #FFFCF9;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    font-weight:100!important;
    padding-top: 8.0rem;
  }
  ul {
    list-style: none;
  }
   /* Responsive margin global ( NAV-TOP ) */

   .max-margin-width{
        max-width: 1250px;
        padding: 0px 20px;
        margin: 0px auto;
        @media (max-width: 1100px){
            max-width:992px;
        }
  }

  /* Responsive margin global ( NAV-TOP ) */
  /* Input search bar ( NAV-TOP )*/
  .input{
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 36px;
    padding: .5em .5rem .5rem 2rem;
    border: 1px #A4A4A4 solid;
    border-radius: 10px;
    outline:none;
    background-color: rgba(242,242,242,.6);

    &:focus{
      border: 1px green solid;
    }
  }
  /* Input login and register ( NAV-TOP )*/
  .input-login{
    width: 100%;
    min-width: 100%;
    font-size: 1rem;
    height: 46px;
    background-color: #fff;
    margin: 10px 0!important;
  }

  .margin-input{
    margin:5px 0;
    width:100%;
  }
  li{
    font-family: 'Patua One', cursive;
    font-weight: 600;
  }
  a{
    text-decoration:none;
    font-weight: 200;
    font-family: 'Patua One', cursive;
  }
  p{
    font-family: 'Kreon', cursive;
  }

  .flex-display{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .display-flex-row{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
  }
.button-sett{
  padding: 2% 0 2% 0;
  width: 100%;
}

  .add-control{
        height: 40px;
        border: 1px solid #ccc;
        border-radius:4px;
        display:flex;
    }
    
    .button-quantity{
        border:none;
        background-color:#fff;
        color: green;
        font-weight: 200;
        font-size:20px;
        padding:3px; 
        cursor:pointer;
    }
    .button-quantity:hover{
        color:orange;
        background-color:#ccc;
    }
    .input-quantity{
        text-align: center;
        min-width: 1ch;
        max-width: 1ch;
        border:none;
        font-size:20px
    }
    .margint-top-bot{
      margin-top: 100px;
      margin-bottom: 100px;
      @media (max-width: 500px){
        margin-top: 10px;
      margin-bottom: 70px;
    }
    }
    .err-form{
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight:100;
      color: rgb(193, 53, 21) !important;
      text-align: left !important;
    }
`;
