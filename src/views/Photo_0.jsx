import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";
import PhotoFrame from "../components/PhotoFrame";

import Mountain from "../assets/photo/mountain.jpg";
import NewZealand from "../assets/photo/NewZealand.jpg";
import Aspens from "../assets/photo/Aspens2.jpg";
import ChasmLake from "../assets/photo/ChasmFall.jpg";
import Woodland from "../assets/photo/OakWoodland.jpg";
import Challenger from "../assets/photo/Challenger0.jpg";
import Paintbrush from "../assets/photo/Paintbrush.jpg";
import TwinSunrise from "../assets/photo/Twins2.jpg";
import Twins from "../assets/photo/Twins3.jpg";
import Moss from "../assets/photo/Moss.jpg";
import Moss0 from "../assets/photo/Moss0.JPG";
import Dunes from "../assets/photo/SmallDunes.jpg";
import Dune0 from "../assets/photo/Dunes0.jpg";
import Dune1 from "../assets/photo/Dunes1.jpg";
import Dune2 from "../assets/photo/Dunes2.jpg";
import Banff from "../assets/photo/Banff_SunsetPass.jpg";
import Bird from "../assets/photo/Bird.jpg";
import Columbine from "../assets/photo/Columbine.jpg";
import Fiji from "../assets/photo/Fiji0.jpg";
import GooseIsland from '../assets/photo/GooseIsland.jpg';
import CityGarden from '../assets/photo/CG0.jpg';
import Marsh from "../assets/photo/Marsh.jpg";
import Falls from "../assets/photo/MN_Falls.jpg";
import Rocks from "../assets/photo/RockStack.jpg";
import Traffic from "../assets/photo/Tails0.jpg";
import Madison from "../assets/photo/Madison0.jpg";
import Mountain2 from "../assets/photo/Mountain1.jpg";
import Grasses from "../assets/photo/Grasses.jpg";
import Chasm from "../assets/photo/Chasm1.jpg";
import Chasm1 from "../assets/photo/Chasm2.jpg";
import Chasm2 from "../assets/photo/Chasm3.jpg";
import Australia from "../assets/photo/Australia.jpg";
import Boardwalk from "../assets/photo/Boardwalk.jpg";

import styles from '../styles/PhotoFrame.module.css';

const intro = {
    header: "photography",
    subheader: "nikon d5200 dslr",
    color: "#fffff",
    body1: "collection of recreational photography i have taken over the years. around 2014 i recieved my first camera and immediately fell in love with the hobby. since then, it is rare to see me on a hike or trip without my camera.",
    body2: "clearly taking inspiration from the natural world around me, the majority of my work focuses on landscape photography from locations i have explored during my upbringing in wisconsin, my current home in colorado and my travels - as far away as the south pacific.",
    figure1: null,
    alt: null,
    caption: null
};

const Photo_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <div className={styles.banner}>
                <img
                    className="banner_img"
                    loading="lazy"
                    src={Challenger}
                    alt="Profile"
                />
            </div>
            <PortfolioEntry id={styles.pp0} params={intro}/>
            <div id={styles.photogrid}>
                <PhotoFrame image={Paintbrush} type="double" />
                <PhotoFrame image={Columbine} image2={Moss} type="3/1" />
                <PhotoFrame image={Woodland} type="full" />
                <PhotoFrame image={ChasmLake} type="double" />

                <PhotoFrame image={TwinSunrise} type="double" />
                <PhotoFrame image={Aspens} image2={Dunes} type="1/3" />
                
                
                <PhotoFrame image={Boardwalk} image2={Grasses} type="1/3" />
                <PhotoFrame image={Chasm} type="full" />
                <PhotoFrame image={Dune1} type="double" />
                
                <PhotoFrame image={Dune0} image2={Falls} type="3/1" />
                
                <PhotoFrame image={Banff} type="full" />
                <PhotoFrame image={Bird} image2={Fiji} type="1/3" />
                <PhotoFrame image={NewZealand} type="double" />

                
                <PhotoFrame image={GooseIsland} type="full" />
                <PhotoFrame image2={Marsh} image={Rocks} type="3/1" />
                <PhotoFrame image2={Madison} image={Traffic} type="1/3" />
                <PhotoFrame image={CityGarden} type="full" />
            </div>

            <span className="half_buffer"></span>
            <Footer page="/photography" dest="hobbies"/>
        </>
    );
};

export default Photo_0;