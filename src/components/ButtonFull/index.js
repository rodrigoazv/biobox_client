import React from 'react';

import { Container } from './styles';

export default function ButtonFull(props) {
  return (
    <Container 
        onClick={props.onClick}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        type={props.type}
        inputColor={props.inputColor}
    >
        {props.text}
    </Container>
  )}
