import React, { useState } from 'react';

import { Container } from './styles';
import Alface from '../../assets/alface.png';

export default function CardProduct() {
    const [quantity, setQuantity] = useState(0);

    function HandleIncrement(){
        setQuantity(quantity+1);
    }
    function HandleDecrement(){
        setQuantity(quantity-1)
        if(quantity<=0){
            setQuantity(0)
        }
    }
    function HandleSubmit(e){
        e.preventDefault();
        setQuantity(quantity)
    }


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
                    <div>
                        <form onSubmit={HandleSubmit} className="flex-display flex-quant">
                            <div className="add-control" > 
                                <button className="button-quantity" onClick={HandleDecrement}>-</button>
                                <input className="input-quantity" value={quantity} />
                                <button className="button-quantity" onClick={HandleIncrement}>+</button>  
                            </div>   
                            <div className="align-button"> 
                                <button className="button" >Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </Container>
  );
}
