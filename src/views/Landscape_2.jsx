import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";



import Fig0 from '../assets/landscape/FR_0.jpg';
import Fig1 from '../assets/landscape/FR_1.jpg';
import Fig2 from '../assets/landscape/FR_2.jpg';
import Fig3 from '../assets/landscape/FR_3.jpg';
import Fig4 from '../assets/landscape/FR_4.jpg';
import Fig5 from '../assets/landscape/FR_5.jpg';

import Fig6 from '../assets/landscape/FR_000.jpg';
import Fig7 from '../assets/landscape/FR_001.jpg';
import Fig8 from '../assets/landscape/FR_002.jpg';
import Fig9 from '../assets/landscape/FR_00.jpg';
import Fig10 from '../assets/landscape/FR_02.jpg';

import styles from '../styles/Portfolio.module.css';

const intro_params = {
    header: "modern residential",
    subheader: "single family design",
    color: "#fffff",
    body1: "prepared for a denver-based client who wanted to embrace the modern architecture of their home with a landscape design that matches. focusing on developing memorable hosting spaces, the original design included full front, back, and rooftop landscape, amenity, and rooftop design.",
    body2: "i served as the junior designer on the project and was responsible for the majority of the production, including cad drafting, layout/selection of inspiration images, and 3d modeling/rendering. on a typical project, i was also in charge of surveying existing site conditions; however, this project was a new build, so i could work directly from the architectural plans.",
    figure1: Fig5,
    alt: null,
    caption: null
};
const inspo_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig5,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const specs_params = {
    header: null,
    subheader: "layout and design details",
    color: "#CBDCF4",
    body1: "the first plan page shows the layout plan, which includes the layout/hardscape design, basic grading plans, material composition, and furniture layout/intent. as a teaser, one of the final renderings can be seen following this text. note that the renderings were produced during the design development phase, with several changes made during the construction detailing phase.",
    body2: "below is the material palette, which includes the material specifications referenced in the layout plan. it serves as a guide for the contractors as they bring the design to life. we focused on high-quality materials that are refined and echo the palette seen in the architecture itself.",
    figure1: Fig4,
    figure2: null,
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
const dtl_params = {
    header: null,
    subheader: "material and plant pallette",
    body1: "during my time working on high-end residential projects, we often leaned on the expertise of our contractors, preparing details to ensure our original design intent would be faithfully reproduced. the following gate/fence detail can be seen both in renderings and final photos below.",
    body2: "the standard design package also includes a full planting plan and comprehensive low-voltage lighting design. the original plans featured path lighting, uplighting, tread lights, and custom sculptural light bars (which were ultimately value-engineered).",
    figure1: Fig10,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const plant_params = {
    header: null,
    subheader: null,
    figure1: Fig1,
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
    figure1: Fig3,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render1_params = {
    header: null,
    subheader: null,
    figure1: Fig9,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render2_params = {
    header: null,
    subheader: "built photography",
    color: "#CBDCF4",
    body1: "built photography was taken by emily redfield upon project completion. the project team included alvarez morris for architecture, elevate by design for landscape architecture, caliber construction as the builders, and higher ground as the landscape construction team.",
    figure1: Fig7,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render3_params = {
    header: null,
    subheader: null,
    figure1: Fig8,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const render4_params = {
    header: null,
    subheader: null,
    figure1: Fig6,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const Landscape_2 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />
            <PortfolioEntry id={styles.mr0} params={intro_params}/>
            {/* <PortfolioEntry id={styles.mr1} params={inspo_params}/> */}
            <PortfolioEntry id={styles.mr4} params={layout_params} shadow={false} scroll={true}/>

            <PortfolioEntry id={styles.mr3} params={dtl_params} shadow={false} />
            <PortfolioEntry id={styles.mr2} params={render0_params} shadow={false} scroll={true}/>

            <PortfolioEntry id={styles.mr5} params={render1_params}/>

            <PortfolioEntry id={styles.mr6} params={specs_params} shadow={false}/>
            <PortfolioEntry id={styles.mr7} params={plant_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.mr8} params={light_params} shadow={false} scroll={true}/>

            <PortfolioEntry id={styles.mr9} params={render2_params}/>
            <PortfolioEntry id={styles.mr10} params={render4_params}/>
            {/* <PortfolioEntry id={styles.mr11} params={render3_params}/> */}         

            <span className="half_buffer"></span>
            <Footer page="/landscape/2" dest={null} /*dest="mountain modern"*/ />
        </>
    );
};

export default Landscape_2;