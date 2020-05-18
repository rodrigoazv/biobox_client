import React, {useState, useEffect} from 'react';
import api from '../../service/api';

import { Container } from './styles';
import { useParams } from 'react-router-dom'

import HeaderTopNav from '../../components/HeaderTopNav';
import Modal from '../../components/Modal'
import Footer from '../../components/Footer';

import {Helmet} from "react-helmet";

import Alface from '../../assets/alface.png';

import { FaTruck } from 'react-icons/fa';

export default function ProductPage() {
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    let { id } = useParams();
    useEffect(()=>{
        window.scrollTo(0, 0);
        api.get(`product/${id}`)
        .then(response=>{
            setProduct(response.data)
        })
    },[id]);
             
    function HandleIncrement(e) {
        e.preventDefault()
        setQuantity(quantity + 1);
    }
    function HandleDecrement(e) {
        e.preventDefault()
        setQuantity(quantity - 1)
        if (quantity <= 1) {
            setQuantity(1)
        }
    }
    //função para lidar com o modal
    function callModal(IDmodal) {
        const modalBox = document.getElementById(IDmodal)
        modalBox.classList.add('self-show')
        setTimeout(() => modalBox.classList.remove('self-show'), 2500)

    }
    function HandleSubmit(e) {
        e.preventDefault();
        setQuantity(quantity)
        setProduct(product)
        localStorage.setItem("@produto-nome-quant/user", [product, quantity])
        callModal('modal-full')
        
    }
    
  return (
    
    <Container>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Produtos</title>
                <link rel="canonical" href="http://biocampeio.com.br" />
        </Helmet>
        <HeaderTopNav/>
        <div className="max-margin-width flex-row">
            <div>
                <img src={Alface} className="product-image" alt="productimgae"></img>
            </div>
            <div className="product-detail">
                <div className="product-name">
                    <p>
                        Biocampeiro
                    </p>
                    <h1>
                        {product.productName}
                    </h1>
                        <p>
                            100g
                    </p>
                    </div>
                    <div className="price-box">
                        <div className="details-pricebox">
                            <h2 className="price">R$4,00</h2>
                            <form onSubmit={HandleSubmit}>
                                <div className="add-cart-form">
                                    <div className="color-add">
                                        <div className="add-control">
                                            <button className="button-quantity" onClick={HandleDecrement}>-</button>
                                            <input className="input-quantity" value={quantity}></input>
                                            <button className="button-quantity" onClick={HandleIncrement}>+</button>
                                        </div>
                                    </div>
                                    <button type="submit" className="button-full">Adicionar</button>
                                </div>
                            </form>
                        </div>
                        <div className="price-payment">
                            <div className="payment-type">
                                Formas de pagamento
                        </div>
                            <p className="paragraph-payment">
                                <FaTruck size={16} />
                            Pague quando receber
                        </p>
                            <p className="paragraph-payment">
                                Pague antes por email
                        </p>
                        </div>
                        <div>
                            <p>caracteristicas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="color">
                <div className="max-margin-width flex-row">
                    <div className="margin">
                        <h3>Informações tecnicas</h3>
                        <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                        <h3>Informações tecnicas</h3>
                        <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                        <h3>Informações tecnicas</h3>
                        <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    </div>
                </div>
            </div>
            <Modal text="Produto adicionado ao Carrinho"/>

            <Footer />
        </Container>
    );
}
