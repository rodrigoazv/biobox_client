import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
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
    background: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
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
  }
  /* Input login and register ( NAV-TOP )*/
  .input-login{
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 46px;
    margin: 10px 0;
    padding: .5em .5rem .5rem 2rem;
    border: 1px #A4A4A4 solid;
    border-radius: 10px;
    outline:none;
    background-color: #fff;
  }
  li{
    font-family: 'Patua One', cursive;
    font-weight: 600;
  }
  a{
    text-decoration:none;
    font-weight: 600;
    font-family: 'Patua One', cursive;
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
  .button-full{
    background-color: #FF7A00; /* Green */
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    border:none;
    margin: 0 10px;  
    height: 40px;
    width:100%;
  }
  .button {
    margin-top: 8px;
    background-color: white;
    color: black;
    border: 2px solid #4CAF50; 
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    width:100%;/* Green */
}
  .button {
    transition-duration: 0.4s;
  }

  .button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
  }
  .flex-display{
    display:flex;
    flex-direction:column;
    align-items:center;
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
        font-weight: 700;
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

`;