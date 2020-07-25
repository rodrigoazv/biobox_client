import styled from "styled-components";

export const Container = styled.header`
  display: block;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  z-index: 3;
  top: 0;
  width: 100%;
  position: fixed;
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

  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    font-family: "Patua One", cursive;
  }

  .logo-sizing {
    height: 87px;
    @media (max-width: 720px) {
      height: 50px;
    }
  }

  .nav-elements {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
  }

  .back-home {
    font-size: 18px;
    margin: 20px;
    color: red;
    @media (max-width: 720px) {
      font-size: 10px;
    }
  }
`;
