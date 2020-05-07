import React from 'react';

import { RiShoppingBasketLine } from 'react-icons/ri';

import { Container } from './styles';

export default function Modal(props) {
  return (
    <Container>
         <div id="modal-full" className="modal-container">
                <div className="modal-box ">
                    <div>
                       <p> {props.text}</p>
                       <RiShoppingBasketLine size={25} color={'black'}/>
                    </div>
                </div>
            </div>
       
    </Container>
  )}
