import React from "react";
import { Carousel } from "react-bootstrap";
import Fon from '../img/Fon.jpg';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{"height":"auto"}}>
                <img
                    className="d-block w-100"
                    src={Fon}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{"height":"auto"}}>
                <img
                    className="d-block w-100"
                    src={Fon}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{"height":"auto"}}>
                <img
                    className="d-block w-100"
                    src={Fon}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;