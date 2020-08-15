import styled from 'styled-components';

export const Container = styled.button`
    text-transform: uppercase;
    background-color: ${props => props.inputColor || `${props.theme.colors.primary}` };
    color: #FFF;
    border: 2px  ; 
    border-color:${props => props.inputBorder || `${props.theme.colors.primary}` };
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight:700;
    border-radius: 4px;
    width:${props => props.inputWidth || '100%' };
    cursor: pointer;
  
    transition-duration: 0.4s;
 
  :hover {
    filter: brightness(80%);/* Green */
    color: white;
  }
`;
