import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import { Container } from './styles';

export default function CardProduct(props) {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        setCart(
            {
            pid:props.id,
            price:props.productPrice,
            quantity: quantity
        })
    },[props.id, props.productPrice, quantity]);

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
    }
    function HandleAddCart(id) {
        
        
        console.log(cart); 
    
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
                            <button onClick={HandleAddCart} className="button" >Adicionar</button>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </Container>
  );
}
