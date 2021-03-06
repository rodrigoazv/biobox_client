import styled from "styled-components";

export const Container = styled.div`

  .flex-table {
    display: flex;
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: center;
    }
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 50px;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .style-link {
    border-radius: 4px;
    padding: 5px 10px;
    background-color: #7fbc44;
    color:#fff;
    transition: 0.2s;
  }
  .style-link:hover {
    -webkit-box-shadow: 1px 0px 6px -1px rgba(0, 0, 0, 0.60);
    -moz-box-shadow: 1px 0px 6px -1px rgba(0, 0, 0, 0.60);
    box-shadow: 1px 0px 6px -1px rgba(0, 0, 0, 0.60);
    background-color: #7fbc11;
  }
  .font-li {
    font-family: Verdana, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5;
    color: #333;
  }
  
  .table{
    width: 100%;
    margin-top:50px;
    @media (max-width: 780px) {
      width: 320px;
      margin:40px 10px ;
    }
  }
`;
