import styled from 'styled-components';

export const Container = styled.section`
    .product-image{
        background-color:transparent;
        height:440px;
        background: url('https://i.imgur.com/PBtTGaE.png') no-repeat;
        background-size: cover;
        @media (max-width: 1100px){
            height:300px;
        }
    }
    .icon{
        height: 22px;
        width: 22px;
    }
    .spanicon{
        margin: 4px;
    }
    .elementProd{
        padding-top: 10px;
    }
    .flex-row{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        margin-top:100px;
        @media (max-width: 1100px){
            flex-direction: column; 
            align-items:center;
        }
    }
    .product-detail{
        width:80%;
        padding-left:150px;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        @media (max-width: 1100px){
            padding:0;
            width:100%;
        }
    }
    h1{
        font-weight: 600;
        font-size:40px;
        color:#333;
    }
    .linear{
        margin:100px 0;
        
    }
    h2{
        font-weight: 600;
        font-size:45px;
        color:#333; 
    }
    .product-name{
        text-align:left;
        p{
            font-size: 19px;
        }
    }
    .flex-price{
        display:flex;
        justify-content: space-between;
        @media(max-width:720px){
            flex-direction:column;
            justify-content:center;
        }
    }
    .details-pricebox{
        display:flex;
        justify-content: center;
        padding: 10px;
        background: #f5f5f5;
        span{
            font-size: 30px;
        }
        
    }
    .add-cart-form{
        display:flex;
        height:auto;
        align-items:center;
        flex-direction: column;
    }
    .price-payment{
        margin-top: 20px;
        font-size: 14px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 5px;
        text-align: left
    }
    .payment-type{
        font-size:18px;
    }
    .paragraph-payment{
        border-top: 1px solid #d9d9d9;
        margin-top: 7px;
        margin-bottom: 7px;
        padding-top: 5px;
        padding-left: 8px;
    }
    .notReady-message{
        border: 1px solid red;
        border-radius:  4px;
        margin: 5%;
        padding: 2%;
        text-align:center;
    }
    .notReady-message p{
        color:red;
        font-size:12px;
    }
    .color{
        background-color:#f2f2f2;
        width:100%;
    }  
    .margin{
        margin:100px 0;
        width: 50%;
    }  
     .color h3{
        font-size:20px;
        margin:10px;
        color:#91B431;
    }
    p{
        color: #808080;
    }
`;
