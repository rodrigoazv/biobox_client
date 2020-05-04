import styled from 'styled-components';

export const Container = styled.div`
 
  .recipes-box{
      margin-top: 50px;
      width:100%;
      padding:0 96px 96px 96px  ;
      display: flex;
      justify-content: space-between;
      flex-direction:column;
      text-align: center;
      align-items: center;  
  }
  .recipes-content{
    border-top: 1px solid #A4A4A4;
    padding-top: 5%;
    justify-content:center;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap
  }
  .recipes-content div{
    margin: 2% ;
  }
 
`;
