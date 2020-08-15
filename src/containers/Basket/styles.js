import styled from 'styled-components';

export const Container = styled.div`
  .marginup{
      margin: 50px 0;
  }
  .flex-box{
      display:flex;
      justify-content: space-between;
  }
  .flex-how{
    display:flex;
    flex-direction: column;
  }
`;

export const HowToMake = styled.div`
  margin: 3px;
  min-width: 200px;
  border-radius: 4px;
  height: 100px;
  background:${props => props.theme.colors.biege};
  padding: 10px;
  p{
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  }
`;

export const Basket = styled.div`
  padding: 20px 10px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  width: 100%;
`;

export const Example = styled.div`
  
`;