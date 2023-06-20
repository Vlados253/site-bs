import React from 'react';
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import History from '../Components/History';
import InputBox from '../Components/InputBox';
import Career from '../Components/Career';
import DealersFlags from '../Components/DealersFlags';

import Dialer1 from '../img/Georgia-dialer1.png';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Georgia(){
    return(
        <>
        <History />
        <DealersFlags />
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
                            <h5>ООО "Бизнес Груп 2010"</h5>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>0109 Грузия, г. Тбилиси, ул. А. Картвелишвили 7</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+995 577-402-356, +995 599-293-109</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>info@business-group.ge, kamaz.ge@mail.ru</p>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Styles>
        <InputBox />
        <Career />
        </>
    )
}

export default Georgia;