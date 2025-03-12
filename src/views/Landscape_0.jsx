import React, { useState } from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";
import ImageArray from "../components/ImageArray";

import Fig0 from '../assets/landscape/64_Concept0.jpg';
import Fig1 from '../assets/landscape/64_Concept1.jpg';
import Fig2 from '../assets/landscape/64_Concept2.jpg';
import Fig3 from '../assets/landscape/64_Concept3.jpg';
import Fig4 from '../assets/landscape/64_Concept4.jpg';

import Fig5 from '../assets/landscape/64_EastCourtyard.jpg';
import Fig6 from '../assets/landscape/64_Park0.jpg';

import AmenitySpace from '../assets/landscape/64_EastCourtyard.jpg';
import PublicPark from '../assets/landscape/64_Park0.jpg';
import PoolCourtyard from '../assets/landscape/64_Pool.jpg';
import WestConceptA from '../assets/landscape/64_Concept1A.jpg';
import WestConceptB from '../assets/landscape/64_Concept1B.jpg';
import WestConceptC from '../assets/landscape/64_Concept1C.jpg';
import EastConceptA from '../assets/landscape/64_Concept2A.jpg';
import EastConceptB from '../assets/landscape/64_Concept2B.jpg';

import Fig8 from '../assets/landscape/64_Overall.jpg';

//import styles from '../styles/Portfolio.module.css';
import '../styles/Portfolio.css';

/*
* parameter dictionaries for initializing portfolio components...
*
*/
const render0_params = {
    header: null,
    subheader: "final renderings",
    color: "#CBDCF4",
    body1: "collection of promotional renderings of the project, rendered by the graphics team at norris design. the renderings show; the west parcel pool and primary amenity space, the east parcel beer garden, and the regional park/trail.",
    body2: "renderings help designer's fully visualize their details and pattern language, validating the scale, style and material pallette are reading as intended. the following renderings, however, were produced for our client in good faith to be used for promotional marketing materials.",
    figure1: null, //Fig7,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};

const Landscape_0 = () => {
    const renderings = {
        images: [PoolCourtyard,PublicPark,AmenitySpace],
        captions: ["pool courtyard", "public regional park", "private amenity space"]
    };

    const westConcepts = {
        images: [WestConceptA,WestConceptB,WestConceptC],
        captions: ["beer garden + community garden", "pool courtyard + regional park", "resident community garden"]
    };

    const eastConcepts = {
        images: [EastConceptA,EastConceptB],
        captions: ["pool, dog park + east lounge", "pocket parks"]
    };

    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="landscape" />

            <div id="dm0" className="module">
                <div className="modBlock">
                    <h2>multi family residental</h2>
                    <h5>master planned community + amenity design</h5>
                    <div className="projectBanner">
                        <img id="mfr_banner" className="bannerImage" src={Fig2} alt="multifamily residential inspiration board" loading="lazy"/>
                    </div>

                    <h5>project brief</h5>
                    <p>as the lead designer on a two-person production team, i was responsible for leading and facilitating the design, drafting, and detailing of a large-scale, multi-family community from concept through to city approval and construction documentation.</p>
                    <p>collaborating with a cross-disciplinary team of investors, civil engineers, and architects, we successfully brought this project to fruition on behalf of our client.</p>
                </div>
            </div>
            <div className="scrollDiv">
                <img id="mfr_concept_west" className="scrollImage" src={Fig0} alt="multifamily residential concept west" loading="lazy"/>
            </div>

            <div id="wp0" className="module">
                <div className="modBlock">
                    <h5>western parcel</h5>
                    <p>the site is divided into two phases: the western and eastern parcels. the western parcel includes a resident garden, beer garden, pool courtyard, and a recreational trail as part of its outdoor amenities.</p>
                    <p>additionally, a two-acre portion of this parcel is designated as a regional park/trail, to be owned and maintained by the denver parks department. the regional park includes a small/large dog park, pickleball court, half basketball court, native garden trail, picnic area, and a large flexible-use recreational field.</p>
                </div>
            </div>

            {/*<PortfolioEntry id="wp0" params={wp0_params} shadow={false}/>*/}
            <ImageArray images={westConcepts.images} captions={westConcepts.captions} tag="(marker on trace)"/>
            {/*
            <PortfolioEntry id="wp1" params={wp1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id="wp2" params={wp2_params} shadow={false} scroll={true}/>
            */}

            <div id="ep1" className="module">
                <div className="modBlock">
                    <h5>eastern parcel</h5>
                    <p>the eastern parcel’s outdoor amenities includes two unique pocket parks, a pool courtyard and beer garden encircled by a recreational trail connecting with the western parcel. given this parcel is smaller than the western, amenities are more compact by nature.</p>
                    <p>the planting design focused on creating dense, ornamental plantings utilizing water-wise native and naturalized plants. taking care to leverage sculptural and foundation plants to provide visual screening to create intimate spaces out of exposed areas.</p>
                </div>
            </div>
            <div className="scrollDiv">
                <img id="mfr_concept_east" className="scrollImage" src={Fig3} alt="multifamily residential concept east" loading="lazy"/>
            </div>
            {/*<ImageArray images={eastConcepts.images} captions={eastConcepts.captions} tag="(marker on trace, scanned + compiled w/ photoshop)"/>*/}

            
            {/*<PortfolioEntry id="ep1" params={ep1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id="ep0" params={ep0_params} shadow={false}/>
            <PortfolioEntry id="ep1" params={ep1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id="ep2" params={ep2_params} shadow={false} scroll={true}/>*/}

            <PortfolioEntry id="re0" params={render0_params} />

            <ImageArray images={renderings.images} captions={renderings.captions} tag="(rendering by norris design 3d)"/>
            <span className="half_buffer"></span>
            <Footer page="/landscape/0" dest="regional park concepts"/>
        </>
    );
};

export default Landscape_0;