import React from "react";
import styled from 'styled-components';
import Perehod from '../img/Perehod.jpg';

const Styles = styled.div`
    .jumbo{
        background: url(${Perehod}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 170px;
        position: relative;
        z-index: -2;
        border-top: 3px solid gray;
        border-bottom: 3px solid gray;
    }
`
function HomeImage(){
    return(
        <Styles>
            <div className="jumbo jumbotron">
                <div className="overlay"></div>
            </div>
        </Styles>
    )
}

export default HomeImage;