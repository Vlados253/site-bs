import React from "react";
import Slider from '../Components/Slider';
import HomeServices from "../Components/HomeServices";
import Video from "../Components/Video";
import HomeImage from "../Components/HomeImage";
import Service from "../Components/Service";

export default function Home() {
    return (
        <>
            <Slider />
            <HomeServices />
            <Video />
            <HomeImage />
            <Service />
        </>
    )
}