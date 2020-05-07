import styled from 'styled-components';

export const Container = styled.section`
    .product-image{
        background-color:green;
        height:440px;
        @media (max-width: 1100px){
            height:300px;
        }
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
    h2{
        font-weight: 600;
        font-size:45px;
        color:#333; 
    }
    .product-name{
        text-align:left;
    }
    .details-pricebox{
        margin-top: 80px;
        display:flex;
        justify-content: space-between;
    }
    .add-cart-form{
        display:flex;
        height:auto;
        align-items:center;
    }
    .price-payment{
        margin-top: 20px;
        font-size: 14px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 5px;
        text-align: left
    }
    .paragraph-payment{
        border-top: 1px solid #d9d9d9;
        margin-top: 7px;
        margin-bottom: 7px;
        padding-top: 5px;
        padding-left: 8px;
    }
    .color{
        background-color:#f2f2f2;
        width:100%;
    }  
    .margin{
        margin:100px 0;
        width: 50%;
    }  
     h3{
        font-size:20px;
        margin:10px;
        color:green;
    }
    p{
        color: #808080;
    }
`;
