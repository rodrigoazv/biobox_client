import styled from "styled-components";

export const Container = styled.section`
  .flextop {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .flexunder {
    display: flex;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  align-items: center;
  transition: transform .35s, opacity .35s;
  &:hover{
    transform: scale(1.01);
    cursor:pointer;
    opacity: 0.8;
  }
`;

export const Picture = styled.img`
  height: 100%;
  @media (max-width: 1024px) {
    height: 200px;
  }
`;
