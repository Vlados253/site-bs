import React from 'react';
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import Dialer1 from '../img/Russian-dialer1.png';
import Dialer2 from '../img/Russian-dialer2.png';
import Dialer3 from '../img/Russian-dialer3.png';
import Dialer4 from '../img/Russian-dialer4.png';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Russian(){
    return(
        <>
        <Styles>
            <Container>
                <Table bordered>
                    <tbody>
                        <tr style={{"width":"100%"}}>
                        <td style={{"width":"34%"}}>
                            <img 
                                src={Dialer1}
                                alt="Первый диллер"
                                style={{"width":"100%", "height":"auto"}}
                            />
                        </td>
                        <td>
                            <h5>ООО “АГП-Центр”</h5>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>603035,г. Нижний Новгород, ул.Чаадаева 1д</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (831) 279-40-77</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>info@agpcentr.ru</p>
                            </div>
                        </td>
                        </tr>
                        <tr style={{"width":"100%"}}>
                        <td style={{"width":"34%"}}>
                            <img 
                                src={Dialer2}
                                alt="Второй диллер"
                                style={{"width":"100%", "height":"auto"}}
                            />
                        </td>
                        <td>
                            <h5>Компания “Русбизнесавто”</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>129329, г.Москва, ул. Ивовая, д.2, комната 37</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (495) 788-16-61</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>kishkunov.d@rbauto.ru</p>
                            </div>
                        </td>
                        </tr>
                        <tr style={{"width":"100%"}}>
                        <td style={{"width":"34%"}}>
                            <img 
                                src={Dialer3}
                                alt="Третий диллер"
                                style={{"width":"100%", "height":"auto"}}
                            />
                        </td>
                        <td>
                            <h5>ООО “РТК “Спецтехника””</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>141281, Московская область, г. Ивантеевка, Санаторный проезд, д. 1</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (495) 984-74-59</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>vseagp@bk.ru</p>
                            </div>
                        </td>
                        </tr>
                        <tr style={{"width":"100%"}}>
                        <td style={{"width":"34%"}}>
                            <img 
                                src={Dialer4}
                                alt="Четвертый диллер"
                                style={{"width":"100%", "height":"auto"}}
                            />
                        </td>
                        <td>
                            <h5>ООО “ИнтерАвтоКом”</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>142450, Московская обл., Ногинский р-н, г. Старая Купавна, Больничный проезд, д.38</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (495) 788-16-61</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>kishkunov.d@rbauto.ru</p>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Styles>
        </>
    )
}

export default Russian;