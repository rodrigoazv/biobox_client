import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
import ButtonFull from '../../components/ButtonFull';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';

import { BsTrash } from 'react-icons/bs';
import { Helmet } from 'react-helmet';


function CartPage() {

    const cartProductState = useSelector(state => state.cart)
    localStorage.setItem("sback_cart_item", JSON.stringify(cartProductState));
    const cartProduct = JSON.parse(localStorage.getItem("sback_cart_item"));
    const dispatch = useDispatch();
    

    function removeProductCart(id) {
        dispatch(removeItem(id));
    }

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Carrinho</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="max-margin-width margin-align  cart-box">
                <div className="box-product">
                    <h2>Carrinho</h2>
                    <div >
                        {cartProduct.length === 0 ? (
                            <p>Carrinho vazio</p>
                        ) : (
                            <>
                                <ul>
                                    {cartProductState.map((product) => (
                                        
                                        <li key={product.pid} >
                                            <div className="display-flex">
                                                <img src={product.photo} alt="none" className="cart-photo"/>
                                                
                                                <div>
                                                    <h4>{product.name}</h4>
                                                    <p>{product.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex-end">
                                                {product.price}
                                            </div>
                                            <div className="flex-end">
                                                Qnt: {product.quantity}
                                            </div>
                                            <button className="mini-button" onClick={() => removeProductCart(product.pid)}>
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
            <Footer />
            <ResponsiveNav/>
        </Container>
    );
}

export default CartPage;