import React from 'react';

import { Container } from './styles';
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ButtonFull from '../../components/ButtonFull';

import { useSelector } from 'react-redux';

function CartPage() {

    const cartProductState = useSelector(state => state.cart)
    localStorage.setItem("sback_cart_item", JSON.stringify(cartProductState));

    const cartProduct = JSON.parse(localStorage.getItem("sback_cart_item"))

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
                                        <li key={product.id}>
                                            <div>
                                                <img src={product.photoUrl} alt="none" className="cart-photo"/>
                                                {product.productName}
                                            </div>
                                            <div className="flex-end">
                                                {product.productPrice}
                                            </div>
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
                    <ButtonFull
                        text="Fazer pedido"
                    />
                </div>
            </div>
            <Footer/>
        </Container>
    );
}

export default CartPage;