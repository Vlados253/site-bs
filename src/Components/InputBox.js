import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from '@emailjs/browser'

const Styles = styled.div `
p{
    margin: 0;
}
`

function InputBox(){

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uvqgbhw', 'template_hyfi8g5', e.target, '1iPx9dJCrZ_7QRPBI')
        e.target.reset()
    }

    return(
        <>
        <Styles>
            <Container>
                
                <h5 className='mt-5'>Сотрудничество</h5>
                <p className='mt-2'>Хотите представлять наши интересы в качестве дилера или сервисного центра?</p>
                <p>Заполните информацию о Вашей организации и наши сотрудники свяжутся с вами в ближайшее время.</p>
            
                <Form className="col-lg-7 col-md-12 my-4" onSubmit={sendEmail}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Наименование компании (обязательно)" name="from_company" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Контактное лицо (обязательно)" name="from_name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Телефон (обязательно)" pattern="375[2-9]{2}[0-9]{7}" name="phone_from" required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control type="email" placeholder="Ваш email (обязательно)" name="email_from" required />
                    </Form.Group>
                    <Form.Select className="mb-3" name="option_from">
                        <option>Стать дилером и сервисным центром</option>
                        <option>Стать сервисным центром</option>
                        <option>Стать дилером</option>
                    </Form.Select>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" placeholder='Сообщение' rows={3} name="message" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Отправить
                    </Button>
                </Form>
            
            </Container>
        </Styles>
        </>
    )
}

export default InputBox;