import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';

//Componentes import
import Footer from '../../components/Footer';
import HeaderTopNav from '../../components/HeaderTopNav';
import ButtonFull from '../../components/ButtonFull';
//api - with redux
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../../store/fetchProduct';
//api - without redux
import api from '../../service/api';


function Checkout() {
    //Variaveis const 
    const dispatch = useDispatch();
    //state de envio adress quando não tiver endereço
    const [zipcode, setZipcode]= useState('');
    const [city, setCity]= useState('');
    const [state, setState]= useState('');
    const [street, setStreet]= useState('');
    const [number, setNumber]= useState('');
    const [complement, setComplement]= useState('');
    const [neighborhood, setNeighborhood]= useState('');
    const [products, setProducts]=useState([])
    const [userId, setUserId] = useState('')
    const id = "960f2bc3-702c-4c4e-905d-cfbd8b99be2a" //LocalStorage-set when data response validate token
    
    const user = useSelector(state => state.user)

    const adressUser = Object.assign({}, user.adress);
    /* {
	"zipcode": "1234",
	"city": "tap",
	"state": "tap",
	"street": "1234",
	"number": "1234",
	"complement": "1234",
	"neighborhood": "1234"
    */

    // verify token

    useEffect(() => {
        dispatch(getOneUser(id));
    },[dispatch, id]);


    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem('sback_cart_item')))
        setUserId(id)
    },[products.length])

    useEffect(()  => { 
        const fetchData = async () => {
            let zipcodeGet = await api.get(`getcep/${zipcode}`); 
            setState(zipcodeGet.data.data.state);
            setStreet(zipcodeGet.data.data.street);
            setNeighborhood(zipcodeGet.data.data.neighborhood);
            setCity(zipcodeGet.data.data.city)
        }
        if(zipcode.length===8){
            fetchData();
        }
    } , [street, zipcode]);

    //user get data
   
    //functions onClick, onSubmit, onChange
    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            zipcode,
            city,
            state,
            street,
            number,
            complement,
            neighborhood
        }
        console.log(data);
        const cartByUser = {
            products,
            userId
        }
        console.log(products);
        try{
            const response = await api.post('sendo', cartByUser);
            console.log(response);
            alert(`Olá  seu cadastro foi realizado`);
    }catch{
            alert(`Error, tente novamente`);
        }
    }

    const cepChange = (e) => {
        setZipcode(e.target.value);
    }
    
    return (
        <Container>
            <HeaderTopNav/>
                <div className="max-margin-width margint-top-bot">
                    <div className="flex-form">
                        <div className="form-margin-width" >
                            <h2 className="background-h2">Dados usuário</h2>
                            <form onSubmit={handleRegister}>
                                <input disabled
                                    className="input-checkout-autoload input-margin"
                                    placeholder={user.completName}
                                />

                                <input disabled
                                    className="input-checkout-autoload input-margin"
                                    placeholder={user.email}
                                />

                                <input disabled
                                    className="input-checkout-autoload input-margin"
                                    placeholder={user.cpf}
                                />

                                <input disabled
                                    className="input-checkout-autoload input-margin"
                                    placeholder={user.dateNasc}
                                />
                            </form>
                        </div>
                        
                        { Object.keys(adressUser).length === 0 ?( <div className="form-margin-width">
                            <h2 className="background-h2">Dados Entrega</h2>
                            <form>
                                <input 
                                    className="input-checkout input-margin"
                                    placeholder="CEP"
                                    type='zipcode'
                                    onChange={cepChange}
                                    value={zipcode}
                                    required
                                />
                                <input 
                                    className="input-checkout input-margin"
                                    placeholder="Endereço"
                                    defaultValue={street}
                                    
                                />
                                <input 
                                    className="input-checkout input-margin"
                                    placeholder="Numero da casa"
                                    defaultValue={number}
                                />
                                <input 
                                    className="input-checkout input-margin"
                                    placeholder="Estado"
                                    defaultValue={state}
                                />
                                <input 
                                    className="input-checkout input-margin"
                                    placeholder="Cidade"
                                    defaultValue={city}
                                />
                            
                                <input 
                                    className="input-checkout input-margin"
                                    placeholder="Complemento"
                                    defaultValue={neighborhood}
                                />
                                
                            </form>
                        </div>
                        
                        ) : (
                            <div className="form-margin-width">
                            <h2 className="background-h2">Dados Entrega</h2>
                            <div>
                                <p>
                                    Endereço de entrega {adressUser.city}, N:{adressUser.number}
                                </p>
                                <p>
                                    Cep {adressUser.zipcode}
                                </p>
                            </div>
                        </div>
                        )}
                        
                        <div className="box-checkout">
                            <p>Os itens serão enviados de acordo com a data prevista de entrega e localidade especifica</p>
                            <h2>Sub-total</h2>
                            <Link to={
                                 {   
                                    pathname: '/checkout/sendOrder',
                                     
                            }}>
                                <ButtonFull
                                    text="Fazer pedido"
                                    type="submit"
                                    onSubmit={handleRegister}
                                />
                            </Link>
                        </div>
                        
                    </div>
                </div>
            <Footer/>
        </Container>
    );
}


export default Checkout;