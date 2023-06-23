import React  from "react";
import { Table, Container } from 'react-bootstrap';
import styled from 'styled-components';

import img from '../img/Crane2.png'

const Styles = styled.div `
p{
    margin: 0;
    padding-left: 10px;
}
`

function Dvina2(){
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
                            <p>ГАЗ-С41А43</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Грузовой момент, тм</p>
                        </td>
                        <td>
                            <p>6,8</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Грузоподъемность, кг
                                <br></br>Максимальная
                                <br></br>Минимальная
                            </p>
                        </td>
                        <td>
                            <p><br></br>3 200
                                <br></br>450
                            </p>
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
                            <p>Вылет, м
                            <br></br>Максимальная
                            <br></br>Минимальная</p>
                        </td>
                        <td>
                            <p><br></br>9
                            <br></br>2</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Максимальная рабочая высота, м</p>
                        </td>
                        <td>
                            <p>11,7</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Максимальная глубина опускания, м</p>
                        </td>
                        <td>
                            <p>13,3</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Ширина выдвижения опор, м</p>
                        </td>
                        <td>
                            <p>13,3</p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Угол вращения стрелы</p>
                        </td>
                        <td>
                            <p>360°</p>
                        </td>
                        </tr>

                    </tbody>

                </Table>
                <Table bordered className="my-5">

                    <tbody>

                        <tr>
                            <td>
                                <p>Телескопическая 3-х секционная стрела (основная стрела + 2 секции)</p>
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
                                <p>Гидравлическое управление с портала</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Дополнительно может комплектоваться люлькой и буром</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Троссовая лебедка с крюком</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Колонна, обеспечивающая вращение стрелы на 360° без ограничений</p>
                            </td>
                        </tr>

                    </tbody>

                </Table>
            </Container>
        </Styles>
        </>
    )
}

export default Dvina2;