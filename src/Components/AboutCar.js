import React from "react";
import { Container } from 'react-bootstrap';
import img from '../img/2.png';

function AboutCar(){
    return(
        <>
        <Container className="my-4">
            <div className="col-lg-7 col-md-12">
                <img 
                    src={img}
                    alt="Фото"
                    style={{"width":"auto","height":"auto"}}
                />
            </div>
            <p className="mt-2 mb-4">Крано-манипуляторная установка - спецтехника, предназначенная для осуществления погрузочно-разгрузочных работ. ВИПО выпускает крано-манипуляторные установки троссового типа с грузоподъемностью от 3 200 до 6 500 кг. К достоинствам тросовых манипуляторов относят их способность работать за препятствием (забором или трубами газопровода), ниже уровня земли, возможность точного позиционирования и перемещения груза строго по вертикали.</p>
        </Container>
        </>
    )
}

export default AboutCar;