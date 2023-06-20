import React from "react";

import History from '../Components/History';
import InputBox from '../Components/InputBox';
import Career from '../Components/Career';
import DealersFlags from '../Components/DealersFlags';
import Russian from '../Dialers/Russian';

function About() {
    return (
        <>
            <History />
            <DealersFlags />
            <Russian />
            <InputBox />
            <Career />
        </>
    );
}

export default About;