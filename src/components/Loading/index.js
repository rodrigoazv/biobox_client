import React from 'react';

import { Container } from './styles';
import Loader from 'react-loader-spinner'

function Loading() {
  return <Container>
    <Loader 
        type="Oval"
        color="#95B737"
        height={64}
        width={64}
    />
  </Container>;
}

export default Loading;