import React from "react";
import { Container, Button } from 'react-bootstrap';
import StudyImg from '../img/Study.png';

function Study(){
    return(
        <>
        <Container>
            <h4 className="mb-4">Обучение</h4>
            <p>На базе Машиностроительной компании “Витебские подъемники” создан учебный центр “Овидий”</p>
            <Button variant="primary" className="mb-4">Перейти на сайт</Button>
            <img 
                src={StudyImg}
                alt="Фон"
                style={{"width":"100%","height":"auto"}}
            />
            <p className="mt-3">Профессиональное обучение персонала ведется по большому количеству профессий в соответствии с учебными программами. По окончании обучения учащимся выдается свидетельство о присвоении профессии, повышении квалификации.</p>
            <p>Постоянно обновляется перечень направлений и специальностей с учетом индивидуальных требований</p>
            <p>Обучение может осуществляться как на базе Учебного центра, так и на базе заказчика.</p>
        </Container>
        </>
    )
}

export default Study;