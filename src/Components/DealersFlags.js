import React from "react";
import { Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Russia from '../img/Russia.png';
import KazakhstanImg from '../img/Kazakhstan.png';
import Georgia from '../img/Georgia.png';
import Ukraine from '../img/Ukraine.png';
// import Kyrgyzstan from '../img/Kyrgyzstan.png';
import Uzbekistan from '../img/Uzbekistan.png';
// import Armenia from '../img/Armenia.png';
// import Azerbaijan from '../img/Azerbaijan.png';
// import Tadjikistan from '../img/Tadjikistan.png';

const Styles = styled.div `
.imgHover img{
    transition: 0.3s;
}
.imgHover img:hover{
    transform: scale(1.2);
}
`

function DealersFlags(){
    return(
        <>
        <Styles>
            <Container className="my-5">
                <h5>Дилеры</h5>
                <Nav className="col-12 my-3 imgHover">

                    <Nav.Link>
                        <Link to="/about">
                            <img
                                src={Russia}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/about/Kazakhstan">
                            <img
                                src={KazakhstanImg}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/about/Georgia">
                            <img
                                src={Georgia}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/about/Ukraine">
                            <img
                                src={Ukraine}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    {/* <Nav.Link>
                        <Link to="">
                            <img
                                src={Kyrgyzstan}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link> */}

                    <Nav.Link>
                        <Link to="/about/Uzbekistan">
                            <img
                                src={Uzbekistan}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    {/* <Nav.Link>
                        <Link to="">
                            <img
                                src={Armenia}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="">
                            <img
                                src={Azerbaijan}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="">
                            <img
                                src={Tadjikistan}
                                alt="Флаг России"
                                style={{"width":"auto", "height":"auto"}}
                            />
                        </Link>
                    </Nav.Link> */}

                </Nav>
            </Container>
        </Styles>
        </>
    )
}

export default DealersFlags;