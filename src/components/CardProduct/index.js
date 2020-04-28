import React from 'react';

import { Container } from './styles';
import Alface from '../../assets/alface.png';

export default function CardProduct() {
    
    return (
        <Container>
            <div className="padding-into">
                <figure className="align-figure">
                    <a href="/">
                        <img className="size-product"src={Alface} alt="text" />
                    </a>
                </figure>
                <div className="product-info">
                    <div className="product-name">Alface 100g</div>
                    <div className="product-description">Molho de alface agrecológico</div>
                    <div className="flex-quant">
                        <div className="product-price">R$ 4,00</div>
                            
                        <div className="add-control"> 
                            <button className="button-quantity">-</button>
                            <input className="input-quantity" placeholder="1"/>
                            <button className="button-quantity">+</button>  
                        </div>   
                    </div>
                </div>
                <div className="align-button"> 
                    <button className="button" >Adicionar carrinho</button>
                </div>
            </div>
        </Container>
  );
}
