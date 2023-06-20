import React from 'react';
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import History from '../Components/History';
import InputBox from '../Components/InputBox';
import Career from '../Components/Career';
import DealersFlags from '../Components/DealersFlags';

import Dialer1 from '../img/Kazakhstan-dialer1.png';
import Dialer2 from '../img/Kazakhstan-dialer2.png';
import Dialer3 from '../img/Kazakhstan-dialer3.png';
import Dialer4 from '../img/Kazakhstan-dialer4.png';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Kazakhstan(){
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
                            <h5>TOO "WEST LINE LTD"</h5>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>Республика Казахстан, г. Актобе, ул. Кунаева, д. 128</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (713) 244-44-64, +7 (701) 391-99-21</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>info@truckcenter.kz</p>
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
                            <h5>TOO "Дорожное снабжение Казахстана"</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>110000, г. Костанай, ул. Карбышева, д.2, оф. 212</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (705) 462-15-71</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>ruper_2009@mail.ru</p>
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
                            <h5>ТОО «Диамант Групп»</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>г. Алматы, пр. Райымбека 481А, 7 этаж, 7 офис. БЦ «ЭТАЛОН»</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (727) 317-93-83, +7 (701) 045-07-77</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>info@diamantgroup.kz</p>
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
                            <h5>ТОО "Алматинский Автоцентр ""Камаз"</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>050028, г. Алматы, улица Северное кольцо, 49</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+7 (727) 220-20-30</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>Info@almatykamaz.kz</p>
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

export default Kazakhstan;