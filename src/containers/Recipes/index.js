import React from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import CardRecipe from '../../components/CardRecipe'
import Footer from '../../components/Footer';



export default function Recipes() {
    return (
        <Container>
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
