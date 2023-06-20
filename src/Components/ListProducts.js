import React from "react";
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Car1 from '../img/Car1.png';
import Car2 from '../img/Car2.png';
// import Car3 from '../img/Car3.png';
// import Car4 from '../img/Car4.png';
// import Car5 from '../img/Car5.png';
// import Car6 from '../img/Car6.png';
// import Car7 from '../img/Car7.png';
// import Car8 from '../img/Car8.png';
// import Car9 from '../img/Car9.png';

function ListProducts(){
    return(
        <>
        <Container className="my-5">
            <div className="row">
                
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car1} alt="img" />
                        <Card.Body>
                            <Card.Title>Автогидроподъемники</Card.Title>
                            <Card.Text>
                                Cпецтехника, предназначенная для подъема людей с инструментами для выполнения различных работ на высоте.
                            </Card.Text>
                            <Link to="/Autohydraulic"><Button variant="primary">Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car2} alt="img" />
                        <Card.Body>
                            <Card.Title>Крано-манипуляторные установки</Card.Title>
                            <Card.Text>
                                Крано-манипуляторная установка - спецтехника, предназначенная для осуществления погрузочно-разгрузочных работ.
                            </Card.Text>
                            <Link to="/Crane-manipulator"><Button variant="primary">Смотреть</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car3} alt="img" />
                        <Card.Body>
                            <Card.Title>Бурильно-крановые машины</Card.Title>
                            <Card.Text>
                                Бурильно-крановая машина - спецтехника, предназначенная для проведения бурильно-крановых работ
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car4} alt="img" />
                        <Card.Body>
                            <Card.Title>Мусоровозы</Card.Title>
                            <Card.Text>
                                Мусоровоз - спецтехника, предназначенная для загрузки, уплотнения, транспортировки и выгрузки мусора.
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car5} alt="img" />
                        <Card.Body>
                            <Card.Title>Автомобильные краны</Card.Title>
                            <Card.Text>
                                Автомобильные краны предназначены для подъема и перемещения грузов. Имеют отличную маневренность, значительную скорость передвижения и грузоподъемность.
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car6} alt="img" />
                        <Card.Body>
                            <Card.Title>Аварийно-технические машины</Card.Title>
                            <Card.Text>
                                Аварийно-техническая машина (АТМ) предназначена для обслуживания и ремонта контактных сетей трамваев и троллейбусов.
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car7} alt="img" />
                        <Card.Body>
                            <Card.Title>КМТ</Card.Title>
                            <Card.Text>
                                КМТ предназначена для очистки улиц, дорог, площадей, и других мест с твёрдым асфальтобетонным покрытием от снега, гололёда, мусора, пыли и тому подобного.
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car8} alt="img" />
                        <Card.Body>
                            <Card.Title>Сельхозтехника</Card.Title>
                            <Card.Text>
                            Cпецтехника, предназначенная для повышения производительности труда в сельском хозяйстве путём механизации и автоматизации отдельных операций или технологических процессов.
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Car9} alt="img" />
                        <Card.Body>
                            <Card.Title>Гидроборты</Card.Title>
                            <Card.Text>
                                Гидроборты - это грузоподъемные механизмы, которые стационарно устанавливают на автомобили или прицепы (полуприцепы). Они предназначены для подъема-опускания грузов с уровня земли.
                            </Card.Text>
                            <Button variant="primary">Смотреть</Button>
                        </Card.Body>
                    </Card>
                </div> */}

            </div>


            
            

            

        </Container>
        </>
    )
}

export default ListProducts;