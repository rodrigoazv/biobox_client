import styled from "styled-components";

export const Container = styled.div`
  .email-box {
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #95b737;
    border-radius: 24px;
    @media (max-width: 984px) {
      margin: 10px;
    }
  }
  .width-x2 {
    padding: 50px 20px 50px 20px;
    width: 50%;
    @media (max-width: 984px) {
      width: 90%;
      padding: 25px 10px 25px 10px;
    }
  }
  .width-x1 {
    width: 100%;
  }
  .width-x3 {
    width: 33%;
    margin-left: 20px;
    @media (max-width: 984px) {
      width: 100%;
      margin-top: 10px;
      margin-left:0;
    }
  }
  .align-horizontal {
    align-items: center;
    height: 100%;
    margin: auto 0px;
  }
  h1 {
    color: white;
    font-size: 40px;
    font-weight: 200;
    @media (max-width: 984px) {
      font-size: 25px;
    }
  }
  .flex-row {
    display: flex;
    flex-direction: row;

    @media (max-width: 984px) {
      flex-direction: column;
      align-items: center;
    }
  }
  p {
    font-size: 20px;
    color: white;
    @media (max-width: 984px) {
      font-size: 15px;
    }
  }
  .err-form-spec{
    padding: 4px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius:4px;
    margin-top: 8px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    min-height: 29px;
    text-align: center;
    font-weight: 600;
    background: rgb(228, 14, 49);
    animation: 0.2s ease 0s 1 normal none running;
    transition: 0.4s;
  }
`;
