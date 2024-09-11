import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig0 from '../assets/landscape/64_Concept0.jpg';
import Fig1 from '../assets/landscape/64_Concept1.jpg';
import Fig2 from '../assets/landscape/64_Concept2.jpg';
import Fig3 from '../assets/landscape/64_Concept3.jpg';
import Fig4 from '../assets/landscape/64_Concept4.jpg';

import Fig5 from '../assets/landscape/64_EastCourtyard.jpg';
import Fig6 from '../assets/landscape/64_Park0.jpg';
import Fig7 from '../assets/landscape/64_Pool.jpg';

import Fig8 from '../assets/landscape/64_Overall.jpg';

import styles from '../styles/Portfolio.module.css';

/*
* parameter dictionaries for initializing portfolio components...
*
*/
const intro_params = {
    header: "multi family residental",
    subheader: "master planned community + amenity design",
    color: "#fffff",
    body1: "as the lead designer on a two-person production team, i was responsible for designing, drafting, and detailing a large-scale, multi-family community from concept through city approval and construction documentation. collaborating with a cross-disciplinary team of investors, civil engineers, and architects, we successfully brought this project to fruition on behalf of our client.",
    body2: "located near the dia/a line light rail station, the project fosters a vibrant living community by offering a variety of unique amenity spaces while embracing rtd design principles. all concepts and hand graphics presented here were designed and rendered by me, during my time at norris design, whose graphics team also produced the 3d renderings featured at the end of this section.",
    figure1: Fig2,
    alt: null,
    caption: null
};
const inspo0_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig0,
    alt: "64th Concepts 1.0",
};
const wp0_params = {
    header: null,
    subheader: "western parcel",
    color: "#CBDCF4",
    body1: "the site is divided into two phases: the western and eastern parcels. the western parcel includes a resident garden, beer garden, pool courtyard, and a recreational trail as part of its outdoor amenities.",
    body2: "additionally, a two-acre portion of this parcel is designated as a regional park/trail, to be owned and maintained by the denver parks department. the regional park includes a small/large dog park, pickleball court, half basketball court, native garden trail, picnic area, and a large flexible-use recreational field.",
    figure1: Fig1,
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
    alt: "64th Concepts 1.1",
};

const ep0_params = {
    header: null,
    subheader: "eastern parcel",
    color: "#fffff",
    body1: "the eastern parcel’s outdoor amenities includes two unique pocket parks, a pool courtyard and beer garden encircled by a recreational trail connecting with the western parcel. given this parcel is smaller than the western, amenities are more compact by nature. ",
    body2: "the planting design focused on creating dense, ornamental plantings utilizing water-wise native and naturalized plants. taking care to leverage sculptural and foundation plants to provide visual screening to create intimate spaces out of exposed areas.",
    body3: null,
    figure1: Fig4,
    alt: null,
};
const ep1_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig3,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const ep2_params = {
    header: null,
    subheader: null,
    color: null,
    body1: null,
    body2: null,
    body3: null,
    figure1: Fig4,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const render0_params = {
    header: null,
    subheader: "final renderings",
    color: "#CBDCF4",
    body1: "collection of promotionaly renderings of the project, rendered by the graphics team at norris design. the renderings show; the west parcel pool and primary amenity space, the east parcel beer garden, and the regional park/trail.",
    body2: "renderings help designer's fully visualize their details and pattern language, validating the scale, style and material pallette are reading as intended. the following renderings, however, were produced for our client in good faith to be used for promotional marketing materials.",
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
    figure1: Fig5,
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
    figure1: Fig6,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};



const Landscape_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />
            <PortfolioEntry id={styles.ip0} params={intro_params} shadow={false}/>
            <PortfolioEntry id={styles.ip1} params={inspo0_params} shadow={false} scroll={true}/>
            {/* <PortfolioEntry params={inspo1_params}/> */}

            <PortfolioEntry id={styles.wp0} params={wp0_params} shadow={false}/>
            {/*
            <PortfolioEntry id={styles.wp1} params={wp1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.wp2} params={wp2_params} shadow={false} scroll={true}/>
            */}
            
            <PortfolioEntry id={styles.ep1} params={ep1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.ep0} params={ep0_params} shadow={false}/>
            {/*<PortfolioEntry id={styles.ep1} params={ep1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.ep2} params={ep2_params} shadow={false} scroll={true}/>*/}

            <PortfolioEntry id={styles.re0} params={render0_params} />
            <PortfolioEntry id={styles.re1} params={render1_params}/>
            <PortfolioEntry id={styles.re2} params={render2_params}/>

            <span className="half_buffer"></span>
            <Footer page="/landscape/0" dest="regional park concepts"/>
        </>
    );
};

export default Landscape_0;