import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

//import Fig0 from '../assets/landscape/Concept_Design_0.jpg';
import Fig1 from '../assets/landscape/ParkConcept_1.jpg';
import Fig2 from '../assets/landscape/ParkConcept_4.jpg';
import Fig3 from '../assets/landscape/ParkConcept_3.jpg';
import Fig4 from '../assets/landscape/ParkConcept_5.jpg';
import Fig5 from '../assets/landscape/ParkConcept_6.jpg';
import Fig6 from '../assets/landscape/ParkConcept_7.jpg';
import Fig7 from '../assets/landscape/ParkConcept_8.jpg';

import styles from '../styles/Portfolio.module.css';

const intro_params = {
    header: "regional park concepts",
    subheader: "conceptual design + graphics",
    color: "#fffff",
    body1: "this project involved a set of preliminary design concepts as part of a feasibility study and investor look-book for a master-planned community in thornton, co. inspired by modern landscape design, natural playgrounds, and informal gathering spaces, two sets of concepts were developed for a large and a small neighborhood park.",
    body2: "both design sets draw from classic principles, such as strong linear sightlines, framing views, forced perspective, and formal structural plantings. the first concept juxtaposes hard geometry with long, sweeping curves, while the second fully embraces an angular design typology.",
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
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const p0_params = {
    header: null,
    subheader: "preferred design concepts",
    color: "#CBDCF4",
    body1: "the large park concept is anchored by a diagonal spine running from the southeast to the northwest corner, interrupted only by a sculptural natural play feature at the park's core.",
    body2: "this central axis is flanked by amenity buildings and formal allees of shade trees, which span and weave through sweeping pedestrian paths and park amenities. each band of the park delineates distinct uses, creating a structured yet natural space that appeals to a diverse range of residents.",
    body3: "the small park concept focuses on flexible-use green lawns, a picnic shelter, and a half-court basketball area. lush plantings and organic bermed seating areas create a dynamic and inviting space within a compact footprint.",
    figure1: Fig4,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const p1_params = {
    header: null,
    subheader: null,
    figure1: Fig3,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const a0_params = {
    header: null,
    subheader: "alternate design concepts",
    color: "#CBDCF4",
    body1: "the second set of park concepts emphasizes strong visual axes and long, uninterrupted straight lines. these are softened by lush native plantings and informal gathering spaces, while the rigid pedestrian path network subdivides the park into distinct areas.",
    body2: "from left to right, the park features an open lawn with berming for street separation, a picnic/spectator space beneath an allee of shade trees, a beer garden-style shelter, private breakout areas, a dry riverbed adjacent to a natural playground, and a large native planting buffer.",
    body3: "the small park concept is straightforward, featuring a strong diagonal axis intersecting a primary forced-perspective walkway that leads to a park shelter. additional amenities include passive and active recreation spaces and an open green lawn.",
    figure1: Fig7,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const a1_params = {
    header: null,
    subheader: null,
    figure1: Fig6,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const r0_params = {
    header: null,
    subheader: "rendering studies",
    body1: "while the project ultimately lost its funding during the pandemic, the preferred concepts were set to be incorporated into the overall community plan before it was sidelined. eager to see these concepts realized, i revisited them when i gained access to the lumion render studio during my high-end residential work. i created stylistic white box renderings as a 'proof of concept'.",
    body2: "the site plan renderings above were initially sketched on trace paper using colored pencils during the concept phase, but were ultimately rendered with felt-tipped pens/markers, using a blueberry marker for drop shadows.",
    figure1: Fig2,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const r1_params = {
    header: null,
    subheader: null,
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
            {/*<PortfolioEntry id={styles.rp1} params={inspo_params} shadow={false}/> */}

            <PortfolioEntry id={styles.rp3} params={p1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.rp2} params={p0_params} shadow={false}/>

            <PortfolioEntry id={styles.rp5} params={a1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.rp4} params={a0_params} shadow={false}/>

            <PortfolioEntry id={styles.rp6} params={r0_params}/>
            <PortfolioEntry id={styles.rp7} params={r1_params}/>

            <span className="half_buffer"></span>
            <Footer page="/landscape/1" dest="modern residential"/>
        </>
    );
};

export default Landscape_1;