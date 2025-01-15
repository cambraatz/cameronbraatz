import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig0 from '../assets/DeliveryScanner_UI.jpg';
import Fig1 from '../assets/DeliveryScanner_UI2.jpg';

import styles from '../styles/Portfolio.module.css';

const DM0_params = {
    header: "delivery scanner",
    subheader: "trucking logistics",
    color: "#fffff",
    body1: "note: this application is on the boards, and is early in development. the goal of which is to streamline the unloading/loading processes in our client's terminal warehouses, bays and trailers. a successful implementation would catch human error and immediately correct it, generate delivery manifests for freight loaded on trucks and provide real-time location data.",
    body2: "the diagrams below were mocked up using Figma and Adobe InDesign to gather initial UI/UX feedback prior to actively developing the application.",
    body3: "please stay tuned for updates as development continues...",
    figure1: null,
    alt: null,
    caption: null
};
const DM1_params = {
    header: null,
    subheader: null,
    figure1: Fig0,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const DM2_params = {
    header: null,
    subheader: null,
    figure1: Fig1,
    alt: "delivery manager figure 1.1",
    caption: "delivery/driver verification prompt"
};

const CompSci_2 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="compsci" />
            <PortfolioEntry id={styles.ds0} params={DM0_params}/>
            <PortfolioEntry id={styles.ds1} params={DM1_params} shadow={false} scroll={true}/>
            <PortfolioEntry id={styles.ds2} params={DM2_params} shadow={false} scroll={true}/>
            <span className="half_buffer"></span>
            <Footer page="/compsci/3" dest={null}/>
        </>
    );
};

export default CompSci_2;