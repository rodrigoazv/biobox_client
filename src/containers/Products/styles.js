import styled from 'styled-components';

export const Container = styled.section`
    .prod-wrapup{
        display:flex;
        flex-direction:row;
        padding-top:5%;
        align-items: flex-start;
        @media (max-width: 550px){
          align-items:unset;
          flex-direction:column;
          justify-content:center;
          margin:auto;
          text-align:center;
    } 
            
    }
    .showcase-box{
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        margin-bottom: 2%;
        @media (max-width: 550px){
          text-align:-webkit-center;
    } 
        
    }
    .showcase-nav{
       margin:auto;
       width:100%;
            
    }
    .showcase-display{
        margin:0;  
        font-size:20px;
      }
    .showcase-display ul{
        display:flex;
        flex-direction:column;
        text-align:center;
        width:207px;
        @media (max-width: 550px){
          flex-direction:column;
          justify-content:center;
    } 
    }
    .showcase-display ul li{
        margin:2%;
        color: white;
        border-radius:4px;
        cursor:pointer;
        width:200px;
        @media (max-width: 770px){
          margin-bottom: 2%;
    } 
    }
    .hort-li{
        background: rgb(149, 183, 55);
    }
    .gran-li{
        background:rgb(101,67,33)
    }
    .biop-li{
        background:rgb(128,172,154);
    }
    .horta{
        background:rgb(149, 183, 55);
        border-radius:4px;
        font-size:12px;
    }
    .granel{
      background: rgb(101,67,33);
      border-radius:4px;
      font-size:12px;
    }
    .bioprodutos{
        background:rgb(128,172,154);
        border-radius:4px;
        font-size:12px;
    }
    .products{
        margin-left: 5%;
        position:initial;
        @media (max-width: 770px){
          margin:auto;
    }
    }
`;
