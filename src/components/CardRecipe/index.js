import React from 'react';

import { Container } from './styles';
import Meloon from '../../assets/meloon.jpg';

import Button from '../../components/ButtonFull';

export default function CardRecipe() {
    return (
        <Container>
            <div className="card-content">
                <figure className="align-figure">
                    <a href="/">
                        <img className="size-product" src={Meloon} alt="text" />
                    </a>
                </figure>
                <div className="recipe-info">
                    <div className="recipe-title">Chucrute de Melão</div>
                    <div className="recipe-description">Receita de chucrute de melão adocicado e aromatizado com ervas finas da amazônia</div>
                    <div>
                        <div className="align-button">
                           <Button 
                           text="Ler Mais"
                           />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
