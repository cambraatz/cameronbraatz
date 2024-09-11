import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";



import Fig0 from '../assets/landscape/LY_0.jpg';
//import Fig1 from '../assets/landscape/LY_1.jpg';
import Fig2 from '../assets/landscape/LY_2.jpg';
import Fig3 from '../assets/landscape/LY_3.jpg';


import Fig6 from '../assets/landscape/LY_00.jpg';
import Fig7 from '../assets/landscape/LY_01.jpg';
import Fig8 from '../assets/landscape/LY_02.jpg';
import Fig9 from '../assets/landscape/LY_03.jpg';
//import Fig10 from '../assets/landscape/LY_04.jpg';

import styles from '../styles/Portfolio.module.css';

const intro_params = {
    header: "mountain modern",
    subheader: "single family design",
    color: "#fffff",
    body1: "design and development of standard bike trail infrastructure typologies in the greater madison wisconsin area, driven by inventoried geospatial pollinator habitat indicators. arcgis was instrumental in the research front end and mapping graphics, while sketchup and photoshop were implemented for the diagrammatic renderings.",
    body2: "results of regional analysis methods drove pointed development of proposed bicycle trails, prioritizing regions of high pollinator suitability to ensure a cohesive network of pollinator corridors while avoiding areas unsuitable to pollinator inhabitation.",
    body3: "***NEEDS EDITING***",
    figure1: Fig3,
    alt: null,
    caption: null
};
const inspo_params = {
    header: null,
    subheader: null,
    figure1: Fig3,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const dtl_params = {
    header: null,
    subheader: null,
    color: "#CBDCF4",
    body1: null,
    figure1: Fig7,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const layout_params = {
    header: null,
    subheader: null,
    figure1: Fig0,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const light_params = {
    header: null,
    subheader: null,
    figure1: Fig2,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const render0_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig7,
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
    figure1: Fig9,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render2_params = {
    header: null,
    subheader: "built photography",
    color: "#CBDCF4",
    body1: "regional analysis was supported with standard typologies for the various trail conditions, planting strategies for pollinators and low impact development construction detailing for sustainable development practices.",
    body2: "planting suggestions are conducive with spread seeding and native plant species to provide much needed pollinator food resources in an otherwise monocultured agrarian landscape.",
    body3: "***NEEDS EDITING***",
    figure1: Fig9,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render3_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig8,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render4_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig6,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const Landscape_3 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />
            <PortfolioEntry params={intro_params}/>

            <PortfolioEntry params={dtl_params}/>
            <PortfolioEntry params={layout_params} shadow={false} scroll={true}/>

            {/* <PortfolioEntry params={render0_params}/> 
            <PortfolioEntry params={light_params} scroll={true}/> */}

            <PortfolioEntry params={render2_params}/>
            <PortfolioEntry params={render3_params}/>    
            <PortfolioEntry params={render4_params}/>      

            <span className="half_buffer"></span>
            <Footer page="/landscape/3" dest="campus design"/>
        </>
    );
};

export default Landscape_3;