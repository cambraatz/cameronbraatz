import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";
import PhotoFrame from "../components/PhotoFrame";

import Img0 from "../assets/artwork/Float0.jpg";
import Img1 from "../assets/artwork/Float1.jpg";

import styles from '../styles/PhotoFrame.module.css';

const intro = {
    header: "artwork/photography",
    subheader: "master planned community + amenity design",
    color: "#fffff",
    body1: "design and development of standard bike trail infrastructure typologies in the greater madison wisconsin area, driven by inventoried geospatial pollinator habitat indicators. arcgis was instrumental in the research front end and mapping graphics, while sketchup and photoshop were implemented for the diagrammatic renderings.",
    body2: "results of regional analysis methods drove pointed development of proposed bicycle trails, prioritizing regions of high pollinator suitability to ensure a cohesive network of pollinator corridors while avoiding areas unsuitable to pollinator inhabitation.",
    body3: "***NEEDS EDITING***",
    figure1: null,
    alt: null,
    caption: null
};
const frame0 = {
    image: Img0,
    image1: Img1,
};




const Artwork_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />
            <PortfolioEntry id={styles.ip0} params={intro}/>
            <PhotoFrame params={frame0} image={Img0} image2={Img1} type="1/3" />

            <span className="half_buffer"></span>
            <Footer page="/landscape/0" dest="regional park concepts"/>
        </>
    );
};

export default Artwork_0;