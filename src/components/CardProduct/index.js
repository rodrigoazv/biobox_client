import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container } from './styles';

//Default-Componentes
import ButtonFull from '../ButtonFull';


export default function CardProduct({props, addCartProduct}) {
    const [quantity, setQuantity] = useState(1);

    function HandleIncrement(){
        setQuantity(quantity+1);
        if(quantity>8){
            setQuantity(9)
            alert('O máximo de compras para pessoa juridica são 9 itens')
        }
    }
    function HandleDecrement(){
        setQuantity(quantity-1)
        if(quantity<=0){
            setQuantity(0)
        }
    }
    function HandleSubmit(e){
        e.preventDefault();
    }
    return (
        <Container>
            <div className="padding-into">
                <figure className="align-figure">
                    <Link 
                        to={
                        {   
                            pathname: `product/${props.id}`,
                            search: props.name,
                            state: { id: props.id }
                        }
                        }>

                        <img className="size-product"src={props.photoUrl} alt="text" />
                    </Link>
                </figure>
                <div className="product-info">
                <div className="product-name">{props.name}</div>
                <div className="product-name">{props.productPrice}</div>
                    <div className="product-description">{props.producDescription}</div>
                    <div>
                        <form onSubmit={HandleSubmit} className="flex-display flex-quant">
                            <div className="add-control" > 
                                <button className="button-quantity" onClick={HandleDecrement}>-</button>
                                <input className="input-quantity" value={quantity} />
                                <button className="button-quantity" onClick={HandleIncrement}>+</button>  
                            </div>   
                            <ButtonFull 
                                onClick={() => addCartProduct(props)} 
                                className="button" 
                                color="red"
                                text="Comprar"
                            />
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </Container>
  );
}
