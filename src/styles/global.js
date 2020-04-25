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
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  .input{
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 36px;
    padding: .5em .5rem .5rem 2rem;
    border: 1px #eee solid;
    border-radius: 10px;
    outline:none;
    background-color: rgba(242,242,242,.6);
  }
  li{
    font-family: 'Patua One', cursive;
    font-weight: 600;
  }
  a{
    text-decoration:none;
    font-weight: 600;

  }

  .max-margin-width{
        max-width: 1250px;
        padding: 0px 30px;
        margin: 0px auto;
  }
  .button {
    margin-top:25px;
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

`;