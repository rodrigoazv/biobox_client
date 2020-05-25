import styled from 'styled-components';

export const Container = styled.footer`
  background-color:#FFFAF5;
  .flex-row{
      display: flex;
      @media(max-width:956px){
            display:flex;
            flex-direction: column;
        }
  }
  .flex-column  a{
        font-weight: 300;
        color: #333;
        margin-top: 5px;
        border-top: 1px solid #D8D8D8;
        @media(max-width:956px){
            display:flex;
            flex-direction: column;
            width: 50%;
            margin-bottom:10px;
            
        }
  }
  .flex-beetwen{
      width: 100%;
      margin: 50px 0 50px 50px;
      padding-left:100px;   
      display: flex;
      justify-content:space-between;
      @media(max-width:956px){
            display:flex;
            flex-direction: column;
            margin: 0 20px 0 20px;
            padding: 0;
        }
  }
  .flex-column{
      display:flex;
      flex-direction:column;
  }
  .column-top{
      display:flex;
      flex-direction:column;
      @media(max-width:956px){
           align-items:center;
        }
  
  }
 
  .flex-social-media{
      display: flex;    
      margin-top:10px;
      @media(max-width:956px){
            margin: 20px;
            padding: 0;
        }
      
  }
  .final-copy{
      border-top: 1px solid #333;
      padding: 30px 0;
      text-align: center;
  }
`;
