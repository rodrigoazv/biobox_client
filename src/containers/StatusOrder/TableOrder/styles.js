import styled from "styled-components";

export const Container = styled.div`
  .detail-table {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px 20px;
    background: #fff;
    margin: 10px 0;
  }
  .flex-table {
    display: flex;
    justify-content: space-between;
    text-align: left;
    @media (max-width: 780px) {
      justify-content: none;
      display: flex;
      flex-direction: column;
    }
  }
  .style-link-first {
    width: 100%;
    background-color: #7fbc44;
    border-radius: 4px;
    margin:10px;
    padding: 4px 20px;
    color: #fff;
  }
`;
