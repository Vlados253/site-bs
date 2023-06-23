import React  from "react";
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import img from '../img/Autohy4.png'

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Vipo52(){
    return(
        <>
        <Styles>
            <Container>
                <img 
                    src={img}
                    alt="Картинка"
                    style={{"width":"auto", "height":"auto"}}
                />
                <h4 className="my-3">Основные характеристики</h4>
                <Table bordered>
                    <tbody>

                        <tr>
                        <td>
                            <p>Модель шасси</p>
                        </td>
                        <td>
                            <p>МАЗ-6516</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Колесная формула</p>
                        </td>
                        <td>
                            <p>4x2</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Тип двигателя</p>
                        </td>
                        <td>
                            <p>Дизельный</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Грузоподъемность люльки, кг</p>
                        </td>
                        <td>
                            <p>300</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Рабочая высота подъема, м</p>
                        </td>
                        <td>
                            <p>28</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Вылет, м</p>
                        </td>
                        <td>
                            <p>16</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Угол поворота стрелы</p>
                        </td>
                        <td>
                            <p>360°</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Опорный контур, м</p>
                        </td>
                        <td>
                            <p>5,28 × 5,4</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Размеры в транспортном положении, м (длина × ширина × высота)</p>
                        </td>
                        <td>
                            <p>9,09 × 2,55 × 3,62</p>
                        </td>
                        </tr>

                    </tbody>

                </Table>
                <Table bordered className="my-5">

                    <tbody>

                        <tr>
                            <td>
                                <p>Телескопическая 6-и секционная стрела (основная стрела + 5 секции)</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Цепная синхронизация выдвижения секций</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Гидравлические шланги и проводка проложены в защитных лотках сбоку секций стрелы или в электро-гидравлическом барабане</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Электрогидравлическое управление с места оператора и с люльки</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Люлька размером 1480×780×1100 (мм)</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Электроизоляция люльки до 1000 В</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Колонна, обеспечивающая вращение стрелы на 360° без ограничений</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Х-образные аутригеры</p>
                            </td>
                        </tr>

                    </tbody>

                </Table>
            </Container>
        </Styles>
        </>
    )
}

export default Vipo52;