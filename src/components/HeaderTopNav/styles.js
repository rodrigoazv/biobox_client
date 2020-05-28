import styled from 'styled-components';

export const Container = styled.header`

    display: block;
    background: white;
    .max-margin{
        max-width: 1270px;
        padding: 0px 30px;
        margin: 0px auto;
        @media (max-width: 1100px){
            max-width:992px;
        }
    }
    .top-nav-sizing{
        width: 100%;
        height: 80px;
    }
    .none{
        display:none;
    }
    .searchBar{
        width: 55%;
        margin-left: 0;
        @media (max-width: 720px){
            margin-bottom:10px; 
            width: 100%;
        }
    }
    a{  
        color: #333;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Patua One', cursive; 
    }
    .display-show{
        @media (max-width: 720px){
            
            display:none;
        }
        
    }
    div.nav-elements-mother{
        height: 100%;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        @media(max-width:956px){
            display:flex;
            flex-direction: column;

        }
        
        
    }
    div.under-nav-top{ 
        
        -webkit-box-align: center;
        align-items: center;
        border-top: .08333rem solid #f2f2f2;
        -webkit-box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        -moz-box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        @media (max-width: 720px){
            display:none;
        }
    }
    ul{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        padding: 15px 0 15px 0;
    }
    .logo-sizing{
        height: 87px;
        @media (max-width: 720px){
            height: 50px;
        }
    }
    .inputWithIcon {
        position: relative;
    }

    .inputWithIcon svg {
        position: absolute;
        right: 0;
        margin-right: 20px;
        top: 11px;
        color:#91B431 ;
        transition: 0.3s;
    }
    .show-when-under-none{
        -webkit-box-align: center;
        align-items: center;
        border-top: .08333rem solid #f2f2f2;
        -webkit-box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        -moz-box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        @media (min-width: 720px){
            height: 50px;
            display:none;   
        }
    }
    .flex-icon{
        display:flex;
        flex-direction:column;
        font-size:10px;
        align-items: center;
        font-weight:300;    
        
    }

`;
