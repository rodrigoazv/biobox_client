import React, { useEffect } from 'react';

import HeaderTopNav from '../../components/HeaderTopNav';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal'
import CardProduct from '../../components/CardProduct';

import { Helmet } from 'react-helmet';
import { Container } from './styles';
import "../../styles/colors";

import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/fetchProduct';



export default function Products() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    return (
        <Container >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Produto</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="prod-wrapup max-margin-width">
                <div className="showcase-box " >
                    <div className="showcase-nav">
                        <div className="showcase-display" >
                            <nav id="tree max-margin-width">
                                <ul>
                                    <li className="hort-li" ><p>Horta</p></li>
                                    <li className="gran-li" ><p>Granel</p></li>
                                    <li className="biop-li" ><p>Bioprodutos</p></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
                <div className="products">
                    <ul className="display-flex">
                        {products.map(product => (
                            <li key={product.id} className="paddingup">
                                <CardProduct
                                    props={product}
                                />
                            </li>
                        ))}

                    </ul>

                </div>

            </div>

            <Footer />
            <Modal text="Produto adicionado ao Carrinho" />
            <ResponsiveNav />
        </Container>
    );
}
