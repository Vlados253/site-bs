import React from "react";
import { Container } from 'react-bootstrap';
import MainAutohydraulicImg from '../img/MainAutohydraulic.png';

function AboutAutohydraulic(){
    return(
        <>
        <Container className="my-4">
            <div className="col-lg-7 col-md-12">
                <img 
                    src={MainAutohydraulicImg}
                    alt="Фото"
                    style={{"width":"100%","height":"auto"}}
                />
            </div>
            <p className="mt-2 mb-4">Автогидроподъемник – спецтехника, предназначенная для подъема людей с инструментами для выполнения различных работ на высоте. Автогидроподъемники востребованные во многих отраслях. Они используются там, где предстоит работа на высоте – в строительстве, промышленности, декорировании, реставрации различных объектов, энергетике, обслуживании наружной рекламы, уходе за городскими зелеными насаждениями, МЧС. ВИПО выпускает телескопические, рычажно-телескопические и автогидроподъемники с дополнительным коленом с высотой от 12 до 52 метров</p>
        </Container>
        </>
    )
}

export default AboutAutohydraulic;