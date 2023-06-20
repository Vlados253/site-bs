import React from "react";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import ArendaImg from '../img/Career.jpg';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
.pMargin p{
    margin: 0;
}
`

function Arenda(){
    return(
        <>
        <Styles>
            <Container className="my-5">
                <h4 className="mb-4">Аренда</h4>
                <p>На базе Машиностроительной компании “Витебские подъемники” создан создан парк спецтехники, которую можно арендовать для осуществления различных видов работ</p>
                <p className="mb-3">Автогидроподъемники, крано-манипуляторные установки, краны и прочая техника</p>
                <img
                    src={ArendaImg}
                    alt="Фон"
                    style={{"width":"100%","height":"auto"}}
                />
                <p className="mt-4 mb-5">За необходимой информацией по наличию и занятости спецтехники Вы можете обратиться к диспетчерам ВИПО</p>
                <div className="d-flex flex-wrap pMargin" style={{"justify-content":"space-between"}}>
                    <div className="d-flex align-items-center">
                        <img 
                                src={Adress}
                                alt="Адрес"
                                style={{"height":"30px","width":"auto"}}
                        />
                        <p style={{"margin-left":"10px"}}>г. Витебск, ул. Двинская, 23А</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img 
                                src={Phone}
                                alt="Телефон"
                                style={{"height":"30px","width":"auto"}}
                        />
                        <p style={{"margin-left":"10px"}}>+375 (29) 321-91-06</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img 
                                src={Email}
                                alt="Email"
                                style={{"height":"24px","width":"auto"}}
                        />
                        <p style={{"margin-left":"10px"}}>vipovstm@mail.ru</p>
                    </div>
                </div>
            </Container>
        </Styles>
        </>
    )
}

export default Arenda;