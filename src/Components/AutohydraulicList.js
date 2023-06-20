import React from "react";
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Car1 from '../img/Autohy1.png'

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

                {/* <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car1} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-28</Card.Title>
                            <Link to="#"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car1} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-28</Card.Title>
                            <Link to="#"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car1} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-28</Card.Title>
                            <Link to="#"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Car1} alt="img" />
                        <Card.Body>
                            <Card.Title>ВИПО-28</Card.Title>
                            <Link to="#"><Button variant="primary" style={{"width":"100%"}}>Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>   */}

            </div>
        </Container>
        </>
    )
}

export default AutohydraulicList;