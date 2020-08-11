import styled from "styled-components";

import Logo from '../../assets/logobio.svg';
import LogoIcon from '../../assets/LogoIcon.svg';

export const Container = styled.header`
  display: block;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: all 300ms ease-in-out;
  z-index: 3;
  top: 0;
  width: 100%;
  position:fixed;
  left: 0;
  .max-margin {
    max-width: 1250px;
    padding: 0px 20px;
    margin: 0px auto;
    @media (max-width: 1100px) {
      max-width: 992px;
      
    }
  }
  .max-margin-searchbar {
    max-width: 1250px;
    padding: 0px 0px 0px 15px;
    margin: 0px auto;
    @media (max-width: 1100px) {
      max-width: 992px;
    }
  }
  .top-nav-sizing {
    width: 100%;
    height: 80px;
  }
  .cart-box span{
    background: #7FBC44;
    color: #fff;
    font-size: .69rem;
    font-weight: 700;
    border-radius: 50%;
    width: 1.19rem;
    height: 1.19rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: 2;
    transition: all 150ms ease-in-out;
    top: -1.1rem;
    left: 0;
  }
  .cart-box{
    background-color:white;
    border: 1px solid #fff;
    border-radius:5px;
    padding: 2px;
    height: 2.5rem;
  }
  .cart-box:hover{
    border: 1px solid rgba(135, 147, 149, 0.3);
    border-radius:5px;
  }
  .none {
    display: none;
  }
  .searchBar {
    width: 55%;
    margin-left: 0;
    z-index:11;
    @media (max-width: 720px) {
      margin-bottom: 10px;
      width: 100%;
    }
  }
  
  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    font-family: "Neuzeit Office Soft Rounded",sans-serif;
    font-weight: 700;
    
  }
  .display-show {
    @media (max-width: 720px) {
      display: none!important;
    }
  }
  .login{
    text-decoration: underline;
  }
  .display-show button {
    color: white;
    background-color: #91b431;
    width: 35px;
    border-radius: 2.5px;
    cursor: pointer;
    transition: background-color 0.4s;
    @media (max-width: 720px) {
      display: none!important;
    }
  }
  .display-show button:hover {
    background-color: red;
  }
  div.nav-elements-mother {
    height: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    @media (max-width: 956px) {
      display: flex;
      flex-direction: row;
    }
  }
  .show{
    @media (max-width: 720px) {
      display:none;
    }
  }
  div.under-nav-top {
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    border-top: 0.08333rem solid #f2f2f2;
    -webkit-box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.20);
    -moz-box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.20);
    box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.20);
    @media (max-width: 720px) {
      display: none;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 0 18px 0;
  }
  .logo-sizing {
    height: 50px;
    width: 180px;
    margin: 12px 0;
    background:url(${Logo});
    background-size: cover;
    @media (max-width: 720px) {
      height: 50px;
      width: 50px;
      background:url(${LogoIcon});
    }
  }
  .button-signout {
    border: none;
  }
  .inputWithIcon {
    position: relative;
  }
  .listbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 10;
    position: absolute;
    list-style: none;
    background-color: #fff;
    overflow: auto;
    max-height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    
  }
  .listbox-element {
    padding: 2px 0 2px 0;
    display: flex;
    flex-direction: row;
    font-weight: 0;
  }
  .img-search {
    max-height: 40px;
  }
  .inputWithIcon svg {
    position: absolute;
    right: 0;
    margin-right: 20px;
    top: 11px;
    color: #91b431;
    transition: 0.3s;
  }
  .show-when-under-none {
    -webkit-box-align: center;
    align-items: center;
    position:relative;
    border-top: 0.08333rem solid #f2f2f2;
    -webkit-box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.39);
    z-index: 1;
    @media (min-width: 720px) {
      height: 50px;
      display: none;
    }
  }
  .flex-icon {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    align-items: center;
    font-weight: 300;
    background: #fff;
  }
  .menu-after-scroll {
    background: white;
    width: 100%;
    z-index: 1;
  }
  .menu-on-scroll {
    background: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    @media (max-width: 750px) {
      box-shadow: unset;
      position: initial;
    }
  }
 
  .min-list {
    font-size: 13px;
    color: #333;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
  }
  .undernav-hover {
    align-items: center;
    text-align: center;
    transition: color 0.3s;
  }
  .undernav-hover:hover {
    color: #91b431;
  }
  .closed-sign{
    display:none;
  }
  
`;
