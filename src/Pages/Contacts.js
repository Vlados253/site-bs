import React from "react";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import YaMap from '../Components/YaMap';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0 0 0 15px;
}
span{
    border-bottom: 2px solid black;
}
`

export default function Contacts() {
    return (
        <>
            <YaMap />
            <Styles>
                <Container className="mb-4 imageSize">


                    <div className="row">
                        <div className="col-12">
                            <h5>Частное предприятие «Машиностроительная компания "Витебские подъемники"»</h5>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 mx-2">
                            <div className="d-flex align-items-center mb-2">
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"height":"33px","width":"auto"}}
                                />
                                <p>210007, г. Витебск, Бешенковичское шоссе, 26/2</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 66-60-06</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>vipovstm@mail.ru</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-12 mx-2">
                            <span>Отдел сбыта</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 66-60-08 Velcom: +375 (29) 602-91-06 Velcom:+375 (44) 777-91-06 РБ</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>vipovstm84@mail.ru</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>vipovstm15@mail.ru ; vipovstm666@mail.ru ; vipovstm2016@mail.ru</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-12 mx-2">
                            <span>Отдел снабжения</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 66-60-04 Городской: +375 (212) 66-60-08 Velcom: +375 (29) 661-91-06</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>vipovstm10@gmail.com</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-12 mx-2">
                            <span>Севисная служба</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 66-60-15 Velcom: +375 (29) 646-91-06 Velcom: +375 (44) 538-52-75</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>vipovstm777@mail.ru ; vipovstm2407@mail.ru ; vipo-service@mail.ru</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-12 mx-2">
                            <span>Бухгалтерия</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 66-60-03 Velcom: +375 (29) 635-91-06</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-4" id="example">
                        <div className="col-12">
                            <h5>Частное производственно-торговое унитарное предприятие “Витстройтехмаш”</h5>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 mx-2">
                            <div className="d-flex align-items-center mb-2">
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"height":"33px","width":"auto"}}
                                />
                                <p>210034, г. Витебск, ул. Двинская, 23А</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 65-72-70</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>vipovstm@mail.ru</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-12 mx-2">
                            <span>Отдел снабжения</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 65-72-70 Velcom: +375 (44) 566-91-06</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={Email}
                                    alt="Email"
                                    style={{"height":"24px","width":"auto"}}
                                />
                                <p>snabvstm@gmail.com</p>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-12 mx-2">
                            <span>Бухгалтерия</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"height":"30px","width":"auto"}}
                                />
                                <p>Городской: +375 (212) 65-72-52 Velcom: +375 (44) 536-91-06</p>
                            </div>
                        </div>
                    </div>


                </Container>
            </Styles>
        </>
    )
}