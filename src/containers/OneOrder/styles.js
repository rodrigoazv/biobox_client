import styled from 'styled-components';

export const Container = styled.div`
  .flex-table{
      display: flex;
      justify-content:space-between;
      @media (max-width: 995px){
            flex-direction: column; 
            align-items:center;
        }
  }
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
    .line {
      border-bottom: 2px solid #dedede;
      margin: 10px 0;
      width: 100%;
    }
  }
  h5{
    background-color: #ddd;
    
    padding: 3px 0 3px 15px;
    border-radius: 2px;
  }
  .title{
      padding: 10px 0;
  }
  .title h1{
      text-align:left;
      padding:0 0 10px 50px;
  }
  .margin-x2{
      @media (max-width: 995px){
            margin: 10px 20px;
        }
  }
  p{
      font-family: Arial, Helvetica, sans-serif;
  }
  .detail-table{
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px 50px;
  }
  .underline-table{
    border-bottom: 1px solid #ddd;
    margin-top: 10px;
    text-align: center;
    display:flex;
    justify-content: space-between;
  }
  .padding-table{
      padding: 50px 100px;
  }
`;
