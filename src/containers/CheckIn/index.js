import React from 'react';

import { Container } from './styles';
//Components
import HeaderTopNav  from '../../components/HeaderTopNav';
import EmailBox from '../../components/EmailBox';
import Footer from '../../components/Footer';

export default function CheckIn() {
  return (
    <Container>
        <HeaderTopNav/>
        <EmailBox/>
        <Footer/>
    </Container>
  );
}
