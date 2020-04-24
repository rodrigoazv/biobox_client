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
    
    div.nav-elements-mother{
        height: 100%;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        
    }
    nav div.under-nav-top{
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        
    }
    ul{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        padding: 15px 0 15px 0;
    }
    li{
        
    }

`;
