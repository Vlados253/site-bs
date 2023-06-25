import React from "react";
import { Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import emailjs from '@emailjs/browser'
import Logotip from '../img/FooterLogotip.png';
import YouTube from '../img/YouTube.png';

const Styles = styled.div `
background-color: black;
color: white;
.insta, .youtube{
    transition: 0.3s;
}
.insta:hover{
    background: pink;
}
.youtube:hover{
    background: red;
}
.footerLogotip{
    transition: 0.3s;
}
.footerLogotip:hover{
    opacity: 70%;
}
@media(min-width: 993px){
    .media{
        align-items: flex-end;
    }
}
@media(max-width: 992px){
    .media{
        align-items: flex-start;
        margin-top: 32px;
    }
}
`

function Footer() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uvqgbhw', 'template_23mwrqr', e.target, '1iPx9dJCrZ_7QRPBI')
        e.target.reset()
    }

  return (
    <Styles>
        <Container className="py-5 d-flex flex-wrap" style={{"align-items":"center", "justify-content":"space-between"}}>
            <Form className="col-lg-6 col-md-12" onSubmit={sendEmail}>
                <h5>Заказать обратный звонок</h5>
                <p style={{"color":"lightgray", "line-height":"1.1"}}>
                    Остались вопросы по спецтехнике ВИПО?
                    Напишите нам и наши специалисты свяжутся с Вами в ближайшее время
                </p>
                <Form.Group className="mb-3">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="example" name="from_name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" name="email_from" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control type="text" placeholder="+375291112233" name="phone_from" pattern="+375[2-9]{2}[0-9]{7}" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Сообщение</Form.Label>
                    <Form.Control as="textarea" placeholder='Enter message' rows={3} name="message" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Отправить
                </Button>
            </Form>
            <div className="d-flex flex-column media">
                <Link to="/">
                    <img
                        src={Logotip}
                        alt="Logo"
                        style={{"height":"auto", "width":"80px"}}
                        className="mb-4 footerLogotip"
                    />
                </Link>
                <h5>Телефоны</h5>
                <p>+375 (212) 65-72-70</p>
                <p className="mb-4">+375 (29) 602-91-06</p>
                <h5>Почта</h5>
                <p className="mb-4">vipo@agpvipo.com</p>
                <h5>Мы в социальных сетях</h5>
                <div className="d-flex" style={{"background-color":"white"}}>
                    <a href="https://www.youtube.com/channel/UCYoqgbvByG80h0x04ofIkLQ"><img
                        src={YouTube}
                        alt="YouTube"
                        style={{"height":"30px", "width":"auto"}}
                        className="youtube"
                    /></a>
                </div>
            </div>
        </Container>
    </Styles>
  );
}

export default Footer;
