import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig00 from '../assets/landscape/Medtronic_Render.JPG';
import Fig0 from '../assets/landscape/Medtronic_0.jpg';
import Fig1 from '../assets/landscape/Medtronic_1.jpg';
import Fig2 from '../assets/landscape/Medtronic_2.jpg';

import styles from '../styles/Portfolio.module.css';

const intro_params = {
    header: "corporate campus planning",
    subheader: "water wise native planting + amenity design",
    color: "#fffff",
    body1: "design and development of standard bike trail infrastructure typologies in the greater madison wisconsin area, driven by inventoried geospatial pollinator habitat indicators. arcgis was instrumental in the research front end and mapping graphics, while sketchup and photoshop were implemented for the diagrammatic renderings.",
    body2: "results of regional analysis methods drove pointed development of proposed bicycle trails, prioritizing regions of high pollinator suitability to ensure a cohesive network of pollinator corridors while avoiding areas unsuitable to pollinator inhabitation.",
    body3: "***NEEDS EDITING***",
    figure1: Fig00,
    alt: null,
    caption: null
};

const wp0_params = {
    header: null,
    subheader: "western parcel",
    color: "#CBDCF4",
    body1: "regional analysis was supported with standard typologies for the various trail conditions, planting strategies for pollinators and low impact development construction detailing for sustainable development practices.",
    body2: "planting suggestions are conducive with spread seeding and native plant species to provide much needed pollinator food resources in an otherwise monocultured agrarian landscape.",
    body3: "***NEEDS EDITING***",
    figure1: null,
    figure2: null,
    alt: "64th Concepts 1.2",
};
const wp1_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig0,
    figure2: null,
    alt: "64th Concepts 1.1",
};
const wp2_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig1,
    figure2: null,
    alt: "64th Concepts 1.1",
};

const render0_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig2,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render1_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig1,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render2_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig0,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};



const Landscape_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />
            <PortfolioEntry params={intro_params}/>
            <PortfolioEntry params={render0_params} shadow={false} scroll={true}/>

            <PortfolioEntry params={wp0_params}/>

            <PortfolioEntry params={render1_params} shadow={false} scroll={true}/>
            <PortfolioEntry params={render2_params} shadow={false}/>

            <span className="half_buffer"></span>
            <Footer page="/landscape/4" dest={null}/>
        </>
    );
};

export default Landscape_0;