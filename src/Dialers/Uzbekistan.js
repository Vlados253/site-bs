import React from 'react';
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import History from '../Components/History';
import InputBox from '../Components/InputBox';
import Career from '../Components/Career';
import DealersFlags from '../Components/DealersFlags';

import Dialer1 from '../img/Uzbekistan1.png';
import Dialer2 from '../img/Uzbekistan2.png';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Uzbekistan(){
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
                            <h5>ООО «ADAMANT»</h5>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>г. Ташкент, ул. Осие, д. 6, офис 50</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+998 (90) 935-85-01 +998 (71) 150-28-46, +998 (97) 333-79-23</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>spes_teh_uz@inbox.ru</p>
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
                            <h5>Rockman Solution</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>г. Ташкент, 100037, пр-т Амир Темура 95</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+998 (97) 134-73-63</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>info@rockmansolution.com</p>
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

export default Uzbekistan;