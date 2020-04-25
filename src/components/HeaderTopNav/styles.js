import styled from 'styled-components';

export const Container = styled.header`
    display: block;
    background: white;
    .max-margin{
        max-width: 1270px;
        padding: 0px 30px;
        margin: 0px auto;
    }
    .top-nav-sizing{
        width: 100%;
        height: 80px;
    }
    .searchBar{
        width: 55%;
        margin-left: 0;
    }
    
    div.nav-elements-mother{
        height: 100%;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        
        
    }
    div.under-nav-top{ 
        -webkit-box-align: center;
        align-items: center;
        border-top: .08333rem solid #f2f2f2;
        -webkit-box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        -moz-box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.39);
        
    }
    ul{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        padding: 15px 0 15px 0;
    }
    .logo-sizing{
        height: 87px;
    }
    .inputWithIcon {
        position: relative;
    }

    .inputWithIcon svg {
        position: absolute;
        right: 0;
        margin-right: 20px;
        top: 11px;
        color: green;
        transition: 0.3s;
  }

`;
