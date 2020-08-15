import styled from "styled-components";

export const Container = styled.div`
  .input-change {
    font-size: 13;
    width: 100%;
    height: 40px;
    padding: 0.5em 0.5rem 0.5rem 2rem;
    text-align: left;
    padding-bottom: 8px;
    color: #586069;
    border-radius: 6px;
    border: 1px #7fbc44 solid;
    &:hover {
      color: "#7fbc44";
    }
    & span {
      width: 100%;
    }
    & svg {
      width: 16px;
      height: 16px;
    }
  }
  .paragraph {
    padding: 10px 10px;
    color: #999a9a;
  }
  .button {
    width: 300px;
  }
  .submit {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 22px;
    }
  }
  .tag-list {
    width: 100%;
    margin: 10px 0;
    font-size: 17px;
    text-align: left;
    font-family: "Kreon", cursive;
    img {
      height: 32px;
    }
    td {
      align-items: center;
      padding: 2px 0;
      border-bottom: 1px dashed #f3f3f3;
    }
    th {
      align-items: center;
      color: #fff;
      padding: 2px 4px;
      font-weight: 200;
      background: #7fbc44;
    }
  }
`;
