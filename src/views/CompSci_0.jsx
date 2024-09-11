import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig0 from '../assets/DriverApp_1.png';
import Fig1 from '../assets/DriverApp_2.png';
import Fig2 from '../assets/DriverApp_3.png';
import Fig3 from '../assets/DriverApp_3A.png';
import Fig4 from '../assets/DriverApp_4.png';
import Fig5 from '../assets/DriverApp_5.png';

import styles from '../styles/Portfolio.module.css';

const DM0_params = {
    header: "delivery manager",
    subheader: "trucking logistics",
    color: "#fffff",
    body1: "this application was developed for a trucking logistics company looking for a solution for tracking driver/delivery information on a personal device. this application allows drivers to edit and maintain their personal driver logs from the convenience of their personal phone or device.",
    body2: "preventing the need to leave the cab and manually log the data with an on-dock computer, thus streamlining the logging process and enabling drivers to adjust their records anywhere and anytime.",
    body3: "the majority of the application logic relies on a react frontend (javascript xml) and a asp.net core backend (c#). api endpoints and processes are established in the backend to connect with the client's existing mssql express database through an easy to use frontend. the application is being deployed to an in-house linux/apache server for hosting.",
    figure1: null,
    figure2: null,
    alt: null,
    caption: null
};
const DM1_params = {
    header: null,
    subheader: "basic functionality",
    color: "#CBDCF4",
    body1: "beginning with log-in credentials and delivery log validation, the application allows a driver to access their personal logs using their personal credentials while providing flexibility for accessing delivery information from previous dates and power units.",
    body2: "verification is performed through an api which provides access to delivery information only when the provided delivery information is both valid and belonging to the corresponding driver.",
    body3: null,
    figure1: Fig0,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const DM2_params = {
    header: null,
    subheader: "delivery verification",
    color: "white",
    body1: "once the user credentials are validated, a popup window prompts the driver to confirm the delivery date and power unit (truck id) to query.",
    body2: "the current date is assumed as most work through the application will be done same day, while the power unit is assumed to be the latest known truck associated with the driver in the database. should a driver need to log in using another power unit (truck unit), they will gain access to the deliveries currently associated with that power unit for reference/updating. similarly, users are able to access deliveries from previous dates as well.",
    body3: null,
    figure1: Fig1,
    figure2: null,
    alt: "delivery manager figure 1.1",
    caption: "delivery/driver verification prompt"
};
const DM3_params = {
    header: null,
    subheader: "delivery manifest",
    color: "white",
    body1: "when the provided date and power unit are confirmed, a list of deliveries for that driver corresponding to the given day are pulled from the database and rendered as an interactive table. undelivered shipments are shown at the top, while delivered shipments are shown lower down.",
    body2: "both cases allow a driver to click/hover (depending on user device) and access additional information for the chosen delivery.",
    body3: null,
    figure1: Fig2,
    figure2: null,
    alt: "delivery manager figure 1.2",
    caption: "delivery manifest"
};
const DM4_params = {
    header: null,
    subheader: "responsive design",
    color: "white",
    body1: "the mobile version truncates a couple less essential fields from the table, while the console/tablet version will include the hidden fields. in both cases, clicking on the table entry will navigate to a page with complete delivery information for review and manipulation.",
    body2: null,
    body3: null,
    figure1: Fig3,
    figure2: null,
    alt: "delivery manager figure 1.3",
    caption: "responsive design"
};
const DM5_params = {
    header: null,
    subheader: "delivery update",
    color: "white",
    body1: "upon selection of a specific delivery, additional information is revealed and the driver is prompted to populate the pertinent delivery information needed to process a delivery.",
    body2: "if the delivery was errantly selected, the driver can return to the previous screen and select a different delivery. if the information is correct, the driver fills out the needed information and submits the changes. doing so edits the corresponding delivery in the database, ensuring all records up to date.",
    body3: null,
    figure1: Fig4,
    figure2: null,
    alt: "delivery manager figure 1.4",
    caption: "delivery update page"
};
const DM6_params = {
    header: null,
    subheader: "user logout",
    color: "white",
    body1: "throughout the session, the user always has the opportunity to log out. once the work is complete or a session is no longer needed, the user may opt to log out at anytime.",
    body2: "clicking the logout button triggers a prompt to confirm their intent before returning the user to the main menu.",
    body3: null,
    figure1: Fig5,
    figure2: null,
    alt: "delivery manager figure 1.5",
    caption: "user logout"
};

const CompSci_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="compsci" />
            <PortfolioEntry id={styles.dm0} className={styles.dm} params={DM0_params}/>
            <PortfolioEntry id={styles.dm1} className={styles.dm} params={DM1_params}/>
            <PortfolioEntry id={styles.dm2} className={styles.dm} params={DM2_params}/>
            <PortfolioEntry id={styles.dm3} className={styles.dm} params={DM3_params}/>
            <PortfolioEntry id={styles.dm4} className={styles.dm} params={DM4_params} scroll={true}/>
            <PortfolioEntry id={styles.dm5} className={styles.dm} params={DM5_params}/>
            {/*<PortfolioEntry id={styles.dm6} className={styles.dm} params={DM6_params}/>*/}
            <span className="half_buffer"></span>
            <Footer page="/compsci/0" dest="rent to own"/>
        </>
    );
};

export default CompSci_0;