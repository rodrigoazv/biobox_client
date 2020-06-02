import React, { useState, useEffect } from 'react';

import HeaderTopNav from '../../components/HeaderTopNav';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';
import CardProduct from '../../components/CardProduct';

import { Helmet } from 'react-helmet';
import { Container } from './styles';
import "../../styles/colors";

import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/fetchProduct';



export default function Products() {
    const [horta, setHorta] = useState(false)
    const [granel, setGranel] = useState(false)
    const [bioprod, setBioprod] = useState(false)
    function handleHorta() {
        setHorta(true)
        setGranel(false)
        setBioprod(false)
    }
    function handleBioprod() {
        setHorta(false)
        setGranel(false)
        setBioprod(true)
    }
    function handleGranel() {
        setHorta(false)
        setGranel(true)
        setBioprod(false)
    }
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
                                    <li className="hort-li" onClick={handleHorta}><p>Horta</p></li>
                                    {horta && (
                                        <div className="horta">
                                            <ul>
                                                <li>Hortaliças</li>
                                                <li>Legumes</li>
                                                <li>Frutas</li>
                                            </ul>

                                        </div>
                                    )}
                                    <li className="gran-li" onClick={handleGranel}><p>Granel</p></li>
                                    {granel && (
                                        <div className="granel">
                                            <ul>
                                                <li>Temperos</li>
                                                <li>Granola</li>
                                                <li>Sementes</li>
                                            </ul>

                                        </div>

                                    )}
                                    <li className="biop-li" onClick={handleBioprod}><p>Bioprodutos</p></li>
                                    {bioprod && (
                                        <div className="bioprodutos">
                                            <ul>
                                                <li>Pimentas</li>
                                                <li>Geleias</li>
                                                <li>Molhos Variados</li>
                                            </ul>
                                        </div>

                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
                <div className="products">
                    {products.map(product=>(
                        <li key={product.id} className="paddingup">
                          <CardProduct
                            props={product}
                          />
                        </li>
                      ))}
                </div>

            </div>

            <Footer />
            <ResponsiveNav/>
        </Container>
    );
}
