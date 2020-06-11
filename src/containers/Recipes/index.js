


import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import Footer from '../../components/Footer';
import ResponsiveNav from '../../components/ResponsiveNav';
import Button from '../../components/ButtonFull';

import { IoIosConstruct } from 'react-icons/io';
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
            <div className="content max-margin-width">
              
                    <div className="box-construct-content">
                        <div className="inner-content-box">
                            <div >
                                <h2>Novidades em breve</h2>
                                <h5>Volte depois, página em construção</h5>
                            </div>
                            <span>
                                <IoIosConstruct size={45} />
                            </span>

                            <div>
                                <Link to="/"><Button text="Retornar" /></Link>
                            </div>
                        </div>

                    </div>

                

            </div>
            <Footer />
            <ResponsiveNav/>
        </Container >
    );
}


// Receitas - Original
/*import React from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import CardRecipe from '../../components/CardRecipe';
import ResponsiveNav from '../../components/ResponsiveNav';
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
            <ResponsiveNav/>
        </Container >
    );
}*/
