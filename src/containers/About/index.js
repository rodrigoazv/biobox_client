import React from 'react';


import { Container } from './styles';
//Components
import HeaderTopNav from '../../components/HeaderTopNav';
import EmailBox from '../../components/EmailBox';
import ResponsiveNav from '../../components/ResponsiveNav';
import Footer from '../../components/Footer';

//Images
import InfoBio1 from '../../assets/InfoBio1.svg';
import InfoBio2 from '../../assets/InfoBio2.svg';
import Beans from '../../assets/beans.png';
import Food from '../../assets/food.png';
import GlutenF from '../../assets/gluten-free.png';
import Tree from '../../assets/tree.png'

//assets
import { Helmet } from 'react-helmet';


export default function About() {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Biocampeiro - Sobre Nós</title>
                <link rel="canonical" href="http://biocampeiro.com.br" />
            </Helmet>
            <HeaderTopNav />
            <div className="about-content max-margin-width">
                <h1 >Nosso Legado</h1>
                <section className="about-section">
                    <div className="about-title">
                        <h2>Nós surgimos com a missão de facilitar o acesso a saúde</h2>
                    </div>

                    <div className="about-box" >
                        <div className="info-img">
                            <img src={InfoBio1} alt='img'></img>
                        </div>

                        <p> A Biocampeiro surgiu para Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum, est sed feugiat tempor, eros turpis posuere lectus, nec imperdiet orci mauris sed purus. Nam sit amet convallis nisl, vel consectetur nibh. Vivamus nisi leo, venenatis sit amet justo eu, pulvinar posuere odio. Quisque egestas egestas nulla in placerat. In semper purus a commodo maximus. Suspendisse non lorem id dui viverra facilisis vel elementum nunc. Duis rutrum, ligula et commodo blandit, libero enim consectetur velit, sit amet malesuada libero purus laoreet orci. Etiam vehicula quam vitae egestas tempus. Pellentesque ligula quam, scelerisque in dolor quis, luctus fringilla felis. Sed vel commodo ligula. Maecenas at sagittis sapien. Praesent interdum ullamcorper dignissim. Fusce in erat vitae est laoreet gravida. Aenean fringilla nisi eget tellus commodo, vel ultricies orci aliquam.
                    Morbi luctus ligula sit amet risus maximus, ornare sodales lacus molestie. Pellentesque eget erat ut diam posuere varius et lacinia lectus. Morbi et mi eu magna molestie posuere et ut sem. Nullam sagittis arcu eget elementum feugiat. Mauris ut enim odio. Donec posuere consectetur tristique. Ut rhoncus vel elit id consequat. Aenean id imperdiet dolor, non molestie metus. Ut erat justo, dictum eu scelerisque non, lacinia a lacus. Ut at libero nec lorem pulvinar gravida. Donec hendrerit blandit nunc a posuere. Pellentesque bibendum nec elit sit amet mattis.</p>
                    </div>
                </section>
                <div className="about-imgs">
                    <ul className="about-img-list">
                        <li><img src={Beans} alt='img' ></img></li>
                        <li><img src={Food} alt='img'></img></li>
                        <li><img src={GlutenF} alt='img'></img></li>
                        <li><img src={Tree} alt='img'></img></li>
                    </ul>
                </div>
                <section>
                    <h2 className="about-title">Cuidando do que comemos, cuidamos do planeta</h2>
                    <div className="about-box">

                        <p>Comida pra nós não significa apenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum, est sed feugiat tempor, eros turpis posuere lectus, nec imperdiet orci mauris sed purus. Nam sit amet convallis nisl, vel consectetur nibh. Vivamus nisi leo, venenatis sit amet justo eu, pulvinar posuere odio. Quisque egestas egestas nulla in placerat. In semper purus a commodo maximus. Suspendisse non lorem id dui viverra facilisis vel elementum nunc. Duis rutrum, ligula et commodo blandit, libero enim consectetur velit, sit amet malesuada libero purus laoreet orci. Etiam vehicula quam vitae egestas tempus. Pellentesque ligula quam, scelerisque in dolor quis, luctus fringilla felis. Sed vel commodo ligula. Maecenas at sagittis sapien. Praesent interdum ullamcorper dignissim. Fusce in erat vitae est laoreet gravida. Aenean fringilla nisi eget tellus commodo, vel ultricies orci aliquam.
                    Morbi luctus ligula sit amet risus maximus, ornare sodales lacus molestie. Pellentesque eget erat ut diam posuere varius et lacinia lectus. Morbi et mi eu magna molestie posuere et ut sem. Nullam sagittis arcu eget elementum feugiat. Mauris ut enim odio. Donec posuere consectetur tristique. Ut rhoncus vel elit id consequat. Aenean id imperdiet dolor, non molestie metus. Ut erat justo, dictum eu scelerisque non, lacinia a lacus. Ut at libero nec lorem pulvinar gravida. Donec hendrerit blandit nunc a posuere. Pellentesque bibendum nec elit sit amet mattis.</p>
                        <div className="info-img">
                            <img src={InfoBio2} alt='img'></img>
                        </div>

                    </div>
                </section>
            </div>
            <EmailBox />
            <ResponsiveNav/>
            <Footer />
            
        </Container >
    );
}

