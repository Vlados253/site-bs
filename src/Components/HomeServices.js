import React from "react";
import { Button, Container } from "react-bootstrap";
import Adress from '../img/Adress.png';
import Phone from '../img/Phone.png';
import Email from '../img/Email.png';

function HomeServices() {
    return (
        <Container className="my-4">
            <h4 className="text-center">Наши услуги</h4>
            <div className="my-4">
                <h5>Обучение</h5>
                <div className="my-4">
                    <p>- На базе Машиностроительной компании “Витебские подъемники” создан учебный центр “Овидий”</p>
                    <p>- Большое количество профессий в соответствии с учебными программами</p>
                    <p>- По окончанию обучения выдается свидетельство о присвоении профессии, повышения квалификации</p>
                    <p>- Обучение может осуществляться как на базе Учебного центра, так и на базе заказчика</p>
                    <a href="https://ovidiy.by/"><Button variant="primary">Перейти на сайт центра</Button></a>
                </div>
                <h5>Аренда</h5>
                <div className="my-4 d-flex flex-wrap" style={{"justify-content":"space-between"}}>
                    <div>
                        <p>- У нас создан парк спецтехники, которую можно арендовать для осуществления различных видов работ</p>
                        <p>- Автогидроподъемники, крано-манипуляторные установки, краны и прочая техника</p>
                        <p>- За необходимой информацией по наличию и занятости спецтехники Вы можете обратиться к диспетчерам ВИПО</p>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <img src={Adress} alt="Адрес" style={{"width":"30px","height":"30xp","margin-right":"10px"}}/>
                            <p style={{"margin":"0"}}>г. Витебск, ул. Двинская, 23А</p>
                        </div>
                        <div className="d-flex align-items-center" style={{"margin-top":"10px"}}>
                            <img src={Phone} alt="Телефон" style={{"width":"30px","height":"30xp","margin-right":"10px"}}/>
                            <p style={{"margin":"0"}}>+375 (29) 321-91-06</p>
                        </div>
                        <div className="d-flex align-items-center" style={{"margin-top":"10px"}}>
                            <img src={Email} alt="Почта" style={{"width":"30px","height":"30xp","margin-right":"10px"}}/>
                            <p style={{"margin":"0"}}>vipovstm@mail.ru</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomeServices;