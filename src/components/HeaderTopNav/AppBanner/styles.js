import styled from "styled-components";

export const Container = styled.div`
  background: #7fbc44;
  color: #fff;
  text-align: left;
  padding: 2px 0;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 750px) {
    font-size: 12px;
  }
  div {
    width: 93%;
    order: 1;
    padding-right: 0;
    display: block;
  }
  button {
    border: none;
    background: none;
    padding-right: 10px;
    cursor: pointer;
  }


`;
