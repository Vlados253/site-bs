import React from "react";
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Car1 from '../img/Autohy1.png'
import Car2 from '../img/Autohy2.png'
import Car3 from '../img/Autohy3.png'
import Car4 from '../img/Autohy4.png'

function AutohydraulicList(){
    return(
        <>
        <Container>
            <div className="row">

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car1} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-28</Card.Title>
                            <Link to="/Autohydraulic/vipo28"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car2} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-12 Miny City</Card.Title>
                            <Link to="/Autohydraulic/vipo12"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car3} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-18</Card.Title>
                            <Link to="/Autohydraulic/vipo18"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car4} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-52</Card.Title>
                            <Link to="/Autohydraulic/vipo52"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </Container>
        </>
    )
}

export default AutohydraulicList;