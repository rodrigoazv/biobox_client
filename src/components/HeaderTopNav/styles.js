import styled from "styled-components";

export const Container = styled.header`
  display: block;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: all 300ms ease-in-out;
  z-index: 3;
  top: 0;
  width: 100%;
  left: 0;
  .max-margin {
    max-width: 1270px;
    padding: 0px 30px;
    margin: 0px auto;
    @media (max-width: 1100px) {
      max-width: 992px;
    }
  }
  .top-nav-sizing {
    width: 100%;
    height: 80px;
  }
  .none {
    display: none;
  }
  .searchBar {
    width: 55%;
    margin-left: 0;
    @media (max-width: 720px) {
      margin-bottom: 10px;
      width: 100%;
    }
  }
  .link-top {
    margin-left: 4px;
  }
  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    font-family: "Patua One", cursive;
  }
  .display-show {
    @media (max-width: 720px) {
      display: none;
    }
  }
  .display-show button {
    color: white;
    background-color: #91b431;
    width: 35px;
    border-radius: 2.5px;
    cursor: pointer;
    transition: background-color 0.4s;
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
      flex-direction: column;
    }
  }
  div.under-nav-top {
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    border-top: 0.08333rem solid #f2f2f2;
    -webkit-box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 2px 18px -9px rgba(0, 0, 0, 0.39);
    @media (max-width: 720px) {
      display: none;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0 15px 0;
  }
  .logo-sizing {
    height: 72px;
    padding: 10px 0;
    @media (max-width: 720px) {
      height: 50px;
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
    box-shadow: 0 -0.83333rem 2.5rem #000;
    @media (max-width: 720px) {
      box-shadow: unset;
    }
  }
  .nav-on-scroll {
    top: 100px;
    position: fixed;
    background: white;
    width: 100%;
    z-index: 10;
    @media (max-width: 720px) {
      box-shadow: unset;
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
    transition: color 0.4s;
  }
  .undernav-hover:hover {
    color: #91b431;
  }
  .menu-grow {
    border-radius: 4px;
    border: solid 1px #ccc;

    -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.18);
  }
`;
