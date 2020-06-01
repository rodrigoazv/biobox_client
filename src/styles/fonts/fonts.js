import { createGlobalStyle } from 'styled-components';

import PatuaOneWoff from './PatuaOne.woff'
import PatuaOneWoff2 from './PatuaOne.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Patua One';
        src: local('Patua One'), local('PatuaOne'),
        url(${PatuaOneWoff2}) format('woff2'),
        url(${PatuaOneWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;