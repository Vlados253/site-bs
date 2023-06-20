import React from "react";
import { Container } from "react-bootstrap";
import styled from 'styled-components';
import Circle from '../img/Circle.png';
import Email from '../img/Email.png';
import Phone from '../img/Phone.png';
import CareerImg from '../img/Career.jpg';

const Styles = styled.div `
p{
    margin: 0;
}
`

function Career(){
    return(
        <>
        <Styles>
            <Container className="my-5">

                <h5 className="mb-3">Карьера</h5>

                <p>Присоединяйтесь к команде ВИПО</p>
                <div className="my-4 mx-3">

                    <div className="d-flex align-items-center">
                        <img
                            src={Circle}
                            alt="-"
                            style={{"width":"auto","height":"8px"}}
                        />
                        <p className="pb-1" style={{"margin-left":"8px"}}>Если, Вы имеете опыт работы на предприятиях машиностроения</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <img
                            src={Circle}
                            alt="-"
                            style={{"width":"auto","height":"8px"}}
                        />
                        <p className="pb-1" style={{"margin-left":"8px"}}>Если, Вы обладаете техническими специальностями</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <img
                            src={Circle}
                            alt="-"
                            style={{"width":"auto","height":"8px"}}
                        />
                        <p className="pb-1" style={{"margin-left":"8px"}}>Если, Вы заканчиваете учебное заведение по технической специальности</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <img
                            src={Circle}
                            alt="-"
                            style={{"width":"auto","height":"8px"}}
                        />
                        <p className="pb-1" style={{"margin-left":"8px"}}>Если, Вы хотите работать в нашей компании</p>
                    </div>

                </div>

                <p>Присылайте ваше резюме:</p>
                <div className="d-flex align-items-center mb-4">

                    <div className="d-flex align-items-center mt-3">
                        <img 
                            src={Email}
                            alt="Почта"
                            style={{"height":"24px","width":"auto"}}
                        />
                        <p style={{"margin-left":"10px"}}>vipovstm@mail.ru</p>
                    </div>

                    <div className="d-flex align-items-center mt-3" style={{"margin-left":"40px"}}>
                        <img 
                            src={Phone}
                            alt="Телефон"
                            style={{"height":"30px","width":"auto"}}
                        />
                        <p style={{"margin-left":"10px"}}>+375 (212) 65-72-70</p>
                    </div>

                </div>
                <img
                    src={CareerImg}
                    alt="Фоновая картинка"
                    style={{"width":"100%","height":"auto"}}
                />
            </Container>
        </Styles>
        </>
    )
}

export default Career;