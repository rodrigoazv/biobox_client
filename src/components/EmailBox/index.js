import React from 'react';

import { Container } from './styles';

import {PRIMARY_ORANGE} from '../../styles/colors'
import Button from '../../components/ButtonFull';

export default function EmailBox() {
  return (
    <Container>
        <div className="email-box max-margin-width flex-row">
            <div className="width-x2">
                <h1>Onto Onto quem deixar email ganha desconto</h1>
                <p>Vou te mandar descontos especiais</p>
            </div>
            <div className="flex-row align-horizontal width-x2">
                <form className="width-x1" ><input className="input"/></form>
                <Button
                text="Enviar"
                inputColor={PRIMARY_ORANGE}
                />
            </div>
        </div>
    </Container>
  );
}