import React from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import CardRecipe from '../../components/CardRecipe'
import Footer from '../../components/Footer';

import { Helmet } from 'react-helmet';


export default function Recipes() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Receitas</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="recipes-box max-margin-width">
                <div>
                    <h1>Receitas</h1>
                </div>
                <div className="recipes-content">
                    <div>
                        <CardRecipe />
                    </div>
                    <div>
                        <CardRecipe />
                    </div>
                    <div>
                        <CardRecipe />
                    </div>
                    <div>
                        <CardRecipe />
                    </div>
                    <div>
                        <CardRecipe />
                    </div>
                    <div>
                        <CardRecipe />
                    </div>


                </div>


            </div>
            <Footer />
        </Container >
    );
}
