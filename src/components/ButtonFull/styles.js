import styled from 'styled-components';
import {PRIMARY_GREN_LIGHT} from '../../styles/colors';

export const Container = styled.button`
  
    margin-top: 8px;
    background-color: ${props => props.inputColor || `${PRIMARY_GREN_LIGHT}` };
    color: #FFF;
    border: 2px  ; 
    border-color:${props => props.inputBorder || `${PRIMARY_GREN_LIGHT}` };
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight:700;
    border-radius: 4px;
    width:${props => props.inputWidth || '100%' };
    cursor: pointer;
  
    transition-duration: 0.4s;
 
  :hover {
    filter: brightness(90%);/* Green */
    color: white;
  }
`;
