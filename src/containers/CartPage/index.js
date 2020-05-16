import React from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ButtonFull from '../../components/ButtonFull';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';

import { BsTrash } from 'react-icons/bs';

function CartPage() {

    const cartProductState = useSelector(state => state.cart)
    localStorage.setItem("sback_cart_item", JSON.stringify(cartProductState));
    const cartProduct = JSON.parse(localStorage.getItem("sback_cart_item"));

    const dispatch = useDispatch();

    function removeProductCart(id){
        dispatch(removeItem(id));
    }


    return (
        <Container>
            <HeaderTopNav/>
            <div className="max-margin-width margin-align display-flex">
                <div className="box-product">
                    <h2>Carrinho</h2>
                    <div >
                        {cartProduct.length === 0 ?(
                            <p>Carrinho vazio</p>
                        ) : (
                            <>
                                <ul>
                                    {cartProduct.map(product => (
                                        <li key={product.id} >
                                            <div className="display-flex">
                                                <img src={product.photoUrl} alt="none" className="cart-photo"/>
                                                
                                                <div>
                                                    <h4>{product.productName}</h4>
                                                    <p>{product.productDescription}</p>
                                                </div>
                                            </div>
                                            <div className="flex-end">
                                                {product.productPrice}
                                            </div>
                                            <button className="mini-button" onClick={() => removeProductCart(product.id)}>
                                                <BsTrash size={22}/>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
                <div className="box-checkout">
                    <p>Os itens serão enviados de acordo com a data prevista de entrega e localidade especifica</p>
                    <h2>Sub-total</h2>
                    <Link to="/checkout">
                        <ButtonFull
                            text="Fazer pedido"
                        />
                    </Link>
                </div>
            </div>
            <Footer/>
        </Container>
    );
}

export default CartPage;