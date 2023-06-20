import React from "react";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Sales from '../img/Sales.png';
import ServiceImg from '../img/Service.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

const Styles = styled.div `
p{
    margin: 0;
}
@media (max-width: 991px){
    .serv{
        align-items: center;
        flex-direction: column;
    }
}
@media (max-width: 509px){
    .servCol{
        flex-direction: column;
    }
    .positionImage{
        margin-bottom: 10px;
    }
}
`   

function Service(){
    return(
        <Styles>
            <Container>
                <div className="row my-4 d-flex serv" style={{"justify-content":"space-around"}}>
                    
                    
                    <div className="col-sm-6 col-12" style={{"width":"fit-content"}}>
                        <h4>Отдел продаж</h4>
                        <div className="my-3 border border-2 border-primary rounded-3 py-2 d-flex servCol">
                            <div className="px-2 positionImage">
                                <img 
                                    src={Sales}
                                    alt="Продажи"
                                />
                            </div>
                            <div className="px-2 d-flex" style={{"flex-direction":"column","justify-content":"space-between"}}>
                                <div className="d-flex align-items-center border-bottom border-primary" style={{"padding-bottom":"10px"}}>
                                    <img 
                                        src={Phone}
                                        alt="Телефон"
                                    />
                                    <div style={{"margin-left":"10px"}}>
                                        <p>+375 (212) 66-60-08</p>
                                        <p>+375 (29) 602-91-06</p>
                                        <p>+375 (29) 777-91-06</p>
                                    </div>
                                </div>
                                <div className="py-2 d-flex align-items-center border-bottom border-primary">
                                    <img
                                        src={Email}
                                        alt="Почта"
                                    />
                                    <div style={{"margin-left":"15px"}}>
                                        <p>vipovstm84@mail.ru</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-6 col-12" style={{"width":"fit-content"}}>
                        <h4>Сервисная служба</h4>
                        <div className="my-3 border border-2 border-primary rounded-3 py-2 d-flex servCol">
                            <div className="px-2 positionImage">
                                <img 
                                    src={ServiceImg}
                                    alt="Служба"
                                />
                            </div>
                            <div className="px-2 d-flex" style={{"flex-direction":"column","justify-content":"space-between"}}>
                                <div className="d-flex align-items-center border-bottom border-primary" style={{"padding-bottom":"10px"}}>
                                    <img 
                                        src={Phone}
                                        alt="Телефон"
                                    />
                                    <div style={{"margin-left":"10px"}}>
                                        <p>+375 (212) 66-60-15</p>
                                        <p>+375 (29) 646-91-06</p>
                                        <p>+375 (29) 538-52-75</p>
                                    </div>
                                </div>
                                <div className="py-2 d-flex align-items-center border-bottom border-primary">
                                    <img
                                        src={Email}
                                        alt="Почта"
                                    />
                                    <div style={{"margin-left":"10px"}}>
                                        <p>vipovstm777@mail.ru</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </Styles>
    )
}

export default Service;