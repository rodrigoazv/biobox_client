import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  .order-datails {
    width: 100%;
    font-family: "Roboto", sans-serif;
    color: #575757;
    font-weight: 500;
    span {
      font-size: 14px;
      font-weight: 400;
    }
    p {
      font-family: "Roboto", sans-serif;
      margin: 10px 0;
    }
  }
  .background-h2 {
    background-color: ${props => props.theme.colors.primary};
    font-weight: 100;
    color: #fff;
    font-size: 20px;
    padding: 3px 0 3px 15px;
    border-radius: 5px;
  }
  .flex-form {
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
      margin-top: 60px;
    }
  }
  .box-checkout {
    width: 50%;
    border-radius: 10px;
    border: 1px solid #ddd;
    padding: 25px;
    max-width: 400px;
    @media (max-width: 500px) {
      width: 100%;
    }
    .line {
      border-bottom: 2px solid #dedede;
      margin: 10px 0;
      width: 100%;
    }
  }
  .discount-style {
    margin: 5px 0;
    color: #333;
    font-family: sans-serif;
    font-weight: 300;
  }
  .form-adress {
    width: 50%;
    padding-right: 50px;
    @media (max-width: 500px) {
      width: 100%;
      padding: 0;
    }
  }
  .form-margin-width {
    width: 33%;
    padding-right: 50px;
    margin-bottom: 15px;
    @media (max-width: 500px) {
      width: 100%;
      padding: 0;
    }
  }
  .form-margin-width-2x {
    width: 66%;
    margin-bottom: 15px;
    @media (max-width: 500px) {
      width: 100%;
      padding: 0;
    }
  }
  .form-submit {
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
  .input-margin {
    margin-top: 4px;
  }
  .input-checkout {
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 30px;
    padding: 0.5em 0.5rem 0.5rem 2rem;
    border: 1px #a4a4a4 solid;
    border-radius: 5px;
    outline: none;
    background-color: white;
  }

  .button-change {
    padding: 3px;
    width: 100%;
    color: grey;
    border: none;
    cursor: pointer;
  }
  .button-change:hover {
    color: green;
    cursor: pointer;
  }

  .input-checkout:hover {
    border: 2px #95b737 solid;
  }
  .input-checkout-autoload {
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 30px;
    padding: 0.5em 0.5rem 0.5rem 2rem;
    border: 1px #a4a4a4 solid;
    border-radius: 5px;
    outline: none;
    background-color: #f1f1f1;
  }
  .input-05 {
    margin-left: 5px;
  }
  label {
    padding: 0 5px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: gray;
  }
`;
