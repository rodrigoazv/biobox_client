import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container } from './styles';
import Modal  from '../Modal';

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
      //função para lidar com o modal
      function callModal(IDmodal) {
        const modalBox = document.getElementById(IDmodal)
        modalBox.classList.add('self-show')
        setTimeout(() => modalBox.classList.remove('self-show'), 2500)

    }
    function HandleSubmit(e){
        e.preventDefault();
        callModal('modal-full')
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
                <div className="product-name">{props.productName}</div>
                
                    <div className="product-description">{props.productDescription}</div>
                    <div>
                        <form onSubmit={HandleSubmit} className="flex-display flex-quant">
                            <div className="price-product-container">
                                <div className="product-price">R$ {props.productPrice},00</div>
                                <div className="add-control" > 
                                    <button className="button-quantity" onClick={HandleDecrement}>-</button>
                                    <input className="input-quantity" value={quantity} />
                                    <button className="button-quantity" onClick={HandleIncrement}>+</button>  
                                </div>  
                            </div> 
                            <ButtonFull 
                                onClick={() => addCartProduct(props)} 
                                className="button" 
                                text="Comprar"
                            />
                            <Modal text="Produto adicionado ao Carrinho"/>
                        </form>
                    </div>
                </div>
                
            </div>
        </Container>
  );
}
