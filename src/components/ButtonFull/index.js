import React from 'react';

import { Container } from './styles';

export default function ButtonFull(props) {
  return (
    <Container 
        onClick={props.onClick}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
    >
        {props.text}
    </Container>
  )}
