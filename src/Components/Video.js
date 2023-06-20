import React from "react";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
.videoContainer{
	display: flex;
	align-items: center;
	justify-content: center;
}

.videoRamka{
	width: 100%;
	height: 100%;
	border: 3px solid gray;
	border-radius: 25px;
	box-shadow: 14px 10px 16px 0px rgba(0,0,0,0.2);
}

.videoPlayer{
	width: 100%;
	padding-top: 52.6%;
	background-color: gray;
	position: relative;
	border: 6px solid lightgray;
	border-radius: 20px;
	overflow: hidden;
}

.videoPlayer iframe{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	transition: 0.3s;
}

.videoPlayer iframe:hover{
	transform: scale(1.02);
}
`

function Video() {
    return (
        <Styles>
            <Container className="my-5">
                <div class="videoContainer">
                    <div class="videoRamka">
                        <div class="videoPlayer">
                            <iframe src="https://www.youtube.com/embed/kMngsjqCGPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </Styles>
    )
}

export default Video;