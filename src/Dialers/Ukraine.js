import React from 'react';
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import History from '../Components/History';
import InputBox from '../Components/InputBox';
import Career from '../Components/Career';
import DealersFlags from '../Components/DealersFlags';

import Dialer1 from '../img/Ukraine1.png';
import Dialer2 from '../img/Ukraine2.png';
import Dialer3 from '../img/Ukraine3.png';
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Ukraine(){
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
                            <h5>ООО «ПК «Автотранспортник»</h5>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>08500, Украина, Киевская область, г. Фастов, ул. Транспортная, 2</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+38 (045) 656-66-04</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>avtr.sales@gmail.com</p>
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
                            <h5>ООО “УКР Трак”</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>02105, г. Киев, ул. Павла Усенка, д.8</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+38 (044) 333-99-33</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>sales@ukrtruck.ua</p>
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
                            <h5>ООО “Укравтокомплект”</h5>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Adress}
                                    alt="Адрес"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>01013 г.Киев, ул.Промышленная,1</p>
                            </div>
                            <div className='d-flex align-items-center pb-2'>
                                <img 
                                    src={Phone}
                                    alt="Телефон"
                                    style={{"width":"auto","height":"30px"}}
                                />
                                <p>+38 (044) 501-02-27, +38 (067) 718-44-22</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img 
                                    src={Email}
                                    alt="Email"
                                    style={{"width":"auto","height":"24px"}}
                                />
                                <p>uacom@mazua.com</p>
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

export default Ukraine;