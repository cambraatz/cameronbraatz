import React, { useState } from "react";

import Header from "./Header"
import Footer from './Footer';
import PortfolioEntry from "./PortfolioEntry";
import LinksArray from "./Links";
import ToggleArray from "./ToggleArray";

import LoginPortal from "./LoginPortal";
import DeliveryManager from "./DeliveryManager";
import AdminPortal from "./AdminPortal";
import WarehouseScanner from "./WarehouseScanner";

import DM_Overview_0 from '../assets/compsci/DM_UI_02.png';
import DM_Overview_1 from '../assets/compsci/DM_UI_01.png';
import DA_login_0 from '../assets/compsci/DA_login_0.png';
import DA_login_3 from '../assets/compsci/DA_login_3.png';
import DA_login_4 from '../assets/compsci/DA_login_4.png';
import DA_deliveries_0 from '../assets/compsci/DA_deliveries_0.png';
import DA_deliveries_1 from '../assets/compsci/DA_deliveries_1.png';
import DA_deliveries_2 from '../assets/compsci/DA_deliveries_2.png';
import DA_signature_0 from '../assets/compsci/DA_signature_0.png';
import DA_images_2 from '../assets/compsci/DA_images_2.png';
import DA_graphics_0 from '../assets/compsci/DA_graphics_0.png'

import Fig0 from '../assets/DriverApp_1.png';
import Fig1 from '../assets/DriverApp_2.png';
import Fig2 from '../assets/DriverApp_3.png';
import Fig3 from '../assets/DriverApp_3C.png';
import Fig4 from '../assets/DriverApp_4.png';
import Fig5 from '../assets/DriverApp_5.png';
import Fig6 from '../assets/DriverApp_6.png';

import '../styles/Portfolio.css';
import styles from '../styles/Portfolio.module.css';

const DM0_params = {
    header: "delivery manager",
    subheader: "trucking logistics",
    color: "#fffff",
    body1: "this robust mobile-friendly web application was developed for a trucking logistics company to streamline delivery tracking and driver log management, with a prominent client base including Home Depot.",
    body2: "featuring a responsive react-based frontend (javaScript, css, html) that delivers an intuitive user experience, paired with a scalable .net backend (c#) for secure and efficient handling of database transactions.",
    body3: "hosted on a linux/apache web server, this solution provides drivers with the ability to view, edit, and update their delivery records directly from their personal mobile devices",
    figure1: DM_Overview_0,
    figure2: null,
    alt: null,
    caption: "driver experience/workflow"
};
const DM1_params = {
    header: null,
    subheader: "login portal",
    color: "#CBDCF4",
    body1: "the login portal serves as a secure entry point for both drivers and administrative users, providing tailored access to delivery and management tools.",
    body2: "utilizing username and password credentials, the portal ensures that only authorized users gain access.",
    body3: "successful login initiates a time-based token verification process, safeguarding all subsequent api requests and sensitive resources.",
    figure1: DA_login_0,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const DM2_params = {
    header: null,
    subheader: "delivery verification",
    color: "white",
    body1: "after login, drivers encounter a popup requesting the delivery date and power unit. the portal verifies that the provided information matches an active delivery manifest. only valid and authorized deliveries are displayed.",
    body2: "this functionality supports both real-time updates and retrospective data edits, accommodating operational changes or driver reassignments.",
    body3: null,
    figure1: DA_login_4,
    figure2: null,
    alt: "delivery manager figure 1.1",
    caption: "delivery/driver verification prompt"
};
const DM3_params = {
    header: null,
    subheader: "delivery manifest",
    color: "white",
    body1: "once a driver's credentials and delivery information are verified, the application presents an interactive delivery manifest.",
    body2: "this manifest contains a comprehensive list of the driver’s assigned deliveries, categorized into undelivered and delivered shipments.",
    body3: "undelivered deliveries are prioritized and displayed at the top for quick access, while delivered entries appear below.",
    figure1: DA_deliveries_0,
    figure2: null,
    alt: "delivery manager figure 1.2",
    caption: "delivery manifest"
};
const DM4_params = {
    header: null,
    subheader: "expanded delivery information",
    color: "white",
    body1: "by selecting a row in the manifest, users navigate to a detailed view of the chosen delivery.",
    body2: "this expanded interface allows drivers to review and edit all associated delivery information, ensuring accuracy and flexibility in maintaining records.",
    body3: null,
    figure1: DA_deliveries_1,
    figure2: null,
    alt: "delivery manager figure 1.3",
    caption: "expanded delivery information"
};
const DM5_params = {
    header: null,
    subheader: "signature and image management",
    color: "white",
    body1: "the expanded delivery information page empowers drivers to input delivery details through text and number fields, while leveraging custom-built widgets for advanced functionalities like signature collection and image capture.",
    body2: "the upload process involves saving an image to a pre-defined path, with the text path being the only asset stored in database. subsequent accesses request the image at the stored file path, returning the image for rendering.",
    body3: null,
    figure1: DA_images_2,
    figure2: null,
    alt: "delivery manager figure 1.4",
    caption: "signature and image management"
};
const DM6_params = {
    header: null,
    subheader: "admin portal",
    color: "white",
    body1: "administrative users with specific credentials are redirected to an admin menu upon successful login. the portal provides a suite of tools for managing user accounts and application settings.",
    body2: null,
    body3: null,
    figure1: DM_Overview_1,
    figure2: null,
    alt: "delivery manager figure 1.5",
    caption: "admin portal"
};
const DM7_params = {
    header: null,
    subheader: "visual feedback",
    color: "white",
    body1: "custom graphic icons and specific feedback messages are implemented to visually confirm the outcome of database interactions. enhancing the user experience by communicating the status of each operation, clearly and effectively.",
    body2: "all visual designs, icons and widgets were custom-designed using adobe creative studio tools. the complex inputs warranted custom form logic, for which error handling/input validation was designed from scratch.",
    body3: null,
    figure1: DA_deliveries_2,
    figure2: DA_graphics_0,
    alt: "delivery manager figure 1.5",
    caption: "visual feedback"
};
const DM8_params = {
    header: null,
    subheader: null,
    color: "white",
    body1: null,
    body2: null,
    body3: null,
    figure1: DA_graphics_0,
    figure2: null,
    alt: "delivery manager figure 1.6",
    caption: "visual feedback"
};
const DM9_params = {
    header: null,
    subheader: null,
    color: "white",
    body1: null,
    body2: null,
    body3: null,
    figure1: DA_login_3,
    figure2: null,
    alt: "delivery manager figure 1.7",
    caption: "visual feedback"
};

const OperationsManager = () => {
    const [loginImages,setLoginImages] = useState({
        content: [DA_login_0,DA_login_3,DA_login_4],
        captions: ["login credentials","delivery verification","delivery manifest"]
    });

    const [activeModule,setActiveModule] = useState("login portal");

    const toggleModule = (e) => {
        const target = e.target.closest(".module-selector-title");
        const modules = target.parentElement.children;

        for (var i = 0; i < modules.length; i++) {
            if (modules[i].id === target.id) {
                setActiveModule(target.children[0].innerHTML);
                modules[i].classList.remove("module-selector-inactive");
                modules[i].classList.add("module-selector-active");
            } else {
                modules[i].classList.remove("module-selector-active");
                modules[i].classList.add("module-selector-inactive");
            }
        };
        
    };

    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="compsci" />
            <div id="dm0" className="module">
                <div className="modBlock">
                    <h2>operations manager</h2>
                    <h5>trucking logistics software</h5>
                    
                    <p>this robust suite of mobile-friendly web applications was developed for a trucking logistics company to streamline delivery tracking and driver log management, with a prominent client base including home depot.</p>
                    
                    {/*<h5>ux/ui workflow</h5>*/}
                    <p>featuring a responsive react-based frontend (javaScript, css, html) that delivers an intuitive user experience, paired with a scalable .net backend (c#) for secure and efficient handling of database transactions.</p>
                    <p>hosted on a linux/apache web server, this solution provides drivers with the ability to view, edit, and update their delivery records directly from their personal mobile devices.</p>
                    <p>note: this project is currently being redeveloped to a system of microservices, come back soon to see the progress</p>
                    <div className="projectBanner" id="dm_banner">
                        <img id="dm_uxui" className="noshadow" src={DM_Overview_0} alt="Delivery Manager UI/UX Workflow Diagram" loading="lazy"/>
                    </div>
                </div>
            </div>

            <div className="module-selector-cont" onClick={toggleModule}>
                <div className="module-selector-header">
                    <div id="module-selector-lp" className="module-selector-title start module-selector-active">
                        <p className="module-selector-text">login portal</p>
                    </div>
                    <div id="module-selector-ap" className="module-selector-title module-selector-inactive">
                        <p className="module-selector-text">admin portal</p>
                    </div>
                    <div id="module-selector-dm" className="module-selector-title module-selector-inactive">
                        <p className="module-selector-text">delivery manager</p>
                    </div>
                    <div id="module-selector-ws" className="module-selector-title end module-selector-inactive">
                        <p className="module-selector-text">warehouse scanner</p>
                    </div>
                </div>
            </div>
            

            {/*<div id="dm1" className="module">
                <div className="modBlock">
                    <h5>login portal</h5>
                    <p>the login portal serves as a secure entry point for both drivers and administrative users, providing tailored access to delivery and management tools.</p>
                    <p>utilizing username and password credentials, the portal ensures that only authorized users gain access.</p>
                    <p>successful login initiates a time-based token verification process, safeguarding all subsequent api requests and sensitive resources.</p>
                </div>
            </div>

            <ToggleArray images={loginImages} defaultIndex={0}/>*/}

            {activeModule === "login portal" && <LoginPortal />}
            {activeModule === "admin portal" && <AdminPortal />}
            {activeModule === "delivery manager" && <DeliveryManager />}
            {activeModule === "warehouse scanner" && <WarehouseScanner />}

            <span className="half_buffer"></span>
            <Footer page="/compsci/0" dest="land cover segmentation"/>
        </>
    );
};

export default OperationsManager;