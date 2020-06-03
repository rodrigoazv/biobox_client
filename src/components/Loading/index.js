import React from 'react';

import { Container } from './styles';
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom';

function Loading() {
  return <Container>
    <Loader 
        type="Puff"
        color="#95B737"
        height={30}
        width={30}
    />
    <Redirect to='/login'/>
  </Container>;
}

export default Loading;