import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig0 from '../assets/landscape/Capstone0.png';
import Fig1 from '../assets/landscape/Capstone1.png';
import Fig2 from '../assets/landscape/Capstone2.png';

import styles from '../styles/Portfolio.module.css';

const intro_params = {
    header: "chouteau's landing",
    subheader: "regional analysis and planning",
    color: "#fffff",
    body1: "as part of my senior capstone project, the targeted redevelopment of a industrial corridor in the heart of st. louis. Beginning at forest park, the corridor extends east alongside busch field and a burgeoning bar district to the western banks of the mississippi river.",
    body2: "over the course of a semester i conducted historical research, on-site surveying and arcgis regional analysis to inform the design proposal the following semester.",
    figure1: Fig2,
    alt: null,
    caption: null
};
const inspo_params = {
    header: null,
    subheader: "community mapping",
    color: null,
    body1: "arcgis was implemented to analyze demographics, trail/bike infrastructure, flood boundaries, among other datasets to gather insights on the community level.",
    body2: "the results of the regional analysis showed that the area of study divided neighborhoods both spatially and racially, bike infrastructure was seriously lacking extending east through the city, and there exists effective flood solutions that could reclaim otherwise unusable space south of the st louis arch",
    body3: null,
    figure1: Fig0,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const summary_params = {
    header: null,
    subheader: "informed regional design",
    color: null,
    body1: "the plan view and aerial renderings below highlight and expand on the insights gathered from the regional analysis, anchoring the high-level information to human-scale landmarks.",
    body2: "from this perspective it is easy to see the high-potential for this area, should these popular attractions be tied with meaningful connections.",
    body3: null,
    figure1: Fig1,
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
            <PortfolioEntry id={styles.rp1} params={inspo_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.rp2} params={summary_params} shadow={false}/>

            <span className="half_buffer"></span>
            <Footer page="/landscape/4" dest={null}/>
        </>
    );
};

export default Landscape_1;