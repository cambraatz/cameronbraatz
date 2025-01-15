import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig1 from '../assets/RegionalDesign_0.jpg';
import Fig2 from '../assets/RegionalDesign_01.jpg';
import Fig3 from '../assets/RegionalDesign_1.jpg';
import Fig4 from '../assets/RegionalDesign_2.jpg';

import styles from '../styles/Portfolio.module.css';

const intro_params = {
    header: "dane county trails",
    subheader: "regional analysis and planning",
    color: "#fffff",
    body1: "this project involved the design and development of standard bike infrastructure typologies for the greater madison area (wisconsin). our professor enlisted our help building a regional dataset tracking the pollinator suitability for a growing list of study areas, with each student surveying new zones in the county and compiling the results in a dataset for geographic analysis.",
    body2: "after compilation, arcgis was used to analyze the data and generate regional suitability maps. using the insights gathered in this research phase, we moved forward in macro-level regional planning and the development of design typologies. the latter were rendered using a combination of sketchup and photoshop.",
    figure1: Fig1,
    alt: null,
    caption: null
};
const inspo_params = {
    header: null,
    subheader: "informed regional design",
    color: null,
    body1: "the blue map above stratifies pollinator suitability across a monotone backdrop, with light blue representing highly suitable areas and dark blue areas showing areas unsuitable for sustaining pollinators.",
    body2: "the two suggested trail master plans aim to connect the disparate pollinator habitats with a unified pollinator corridor that ensures safe passage and access to much needed resources.",
    body3: null,
    figure1: Fig2,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const p0_params = {
    header: null,
    subheader: null,
    color: "#CBDCF4",
    figure1: Fig3,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const p1_params = {
    header: null,
    subheader: "informed regional design",
    body1: "the rendered design typologies frame future development of regional bicycle infrastructure, with suggestions for native planting schemes and sustainable design principles.",
    body2: "conceptual renderings visualize the suggested bicycle trails across urban, road adjacent and riparian adjacent trail conditions.",
    figure1: Fig4,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const Landscape_1 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />
            <PortfolioEntry id={styles.rp0} params={intro_params} shadow={false}/> 
            <PortfolioEntry id={styles.rp1} params={inspo_params} shadow={false}/>

            <PortfolioEntry id={styles.rp3} params={p1_params} shadow={false}/>
            <PortfolioEntry id={styles.rp2} params={p0_params} shadow={false}/>

            <span className="half_buffer"></span>
            <Footer page="/landscape/3" dest="chouteaus landing"/>
        </>
    );
};

export default Landscape_1;