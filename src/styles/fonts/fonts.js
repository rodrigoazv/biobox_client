import { createGlobalStyle } from 'styled-components';

import PatuaOneWoff from './PatuaOne.woff';
import PatuaOneWoff2 from './PatuaOne.woff2';
import KreonRegularWoff from './KreonRegular.woff'
import KreonRegularWoff2 from './KreonRegular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Patua One';
        src: local('Patua One'), local('PatuaOne'),
        url(${PatuaOneWoff2}) format('woff2'),
        url(${PatuaOneWoff}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Kreon';
        src: local('KreonRegular'), local('KreonRegular'),
        url(${KreonRegularWoff2}) format('woff2'),
        url(${KreonRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

//<a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>