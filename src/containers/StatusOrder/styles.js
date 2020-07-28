import styled from "styled-components";

export const Container = styled.div`
  .flex-table {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    @media (max-width: 995px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .detail-table {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px 50px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
  .font-li {
    font-family: Verdana, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5;
    color: #333;
  }
`;
