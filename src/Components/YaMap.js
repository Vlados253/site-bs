import React from "react";
import { Container } from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div `
.mapContainer{
	display: flex;
	align-items: center;
	justify-content: center;
}

.mapRamka{
	width: 100%;
	height: 100%;
	border: 3px solid gray;
	border-radius: 25px;
	box-shadow: 14px 10px 16px 0px rgba(0,0,0,0.2);
}

.map{
	width: 100%;
	padding-top: 52.6%;
	background-color: gray;
	position: relative;
	border: 6px solid lightgray;
	border-radius: 20px;
	overflow: hidden;
}

.map iframe{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	transition: 0.3s;
}
`

function YaMap(){
    return(
        <Styles>
            <Container className="mb-5">
                <div class="mapContainer">
                    <div class="mapRamka">
                        <div className="map">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2e82ccf5a3281722bb9e48d3630af16fee638274a9655a4127237f09822e962f&amp;source=constructor" frameborder="0" title="Yandex map"></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </Styles>
    )
}

export default YaMap;