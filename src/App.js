import React from 'react';
import Routes from './routes';
import { ThemeProvider } from "styled-components";
import colors from './styles/colors';

const App = () => <ThemeProvider theme={colors}><Routes/></ThemeProvider>

export default App;
