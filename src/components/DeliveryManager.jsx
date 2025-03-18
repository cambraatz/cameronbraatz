import React, { useState } from "react";

import Header from "./Header"
import Footer from './Footer';
import PortfolioEntry from "./PortfolioEntry";
import LinksArray from "./Links";
import ToggleArray from "./ToggleArray";

import DM_Overview_0 from '../assets/compsci/DM_UI_02.png';
import DM_Overview_1 from '../assets/compsci/DM_UI_01.png';

import DA_admin_0 from '../assets/compsci/DA_admin_0.png';
import DA_admin_1 from '../assets/compsci/DA_admin_1.png';
import DA_admin_2 from '../assets/compsci/DA_admin_2.png';
import DA_admin_3 from '../assets/compsci/DA_admin_3.png';
import DA_admin_4 from '../assets/compsci/DA_admin_4.png';

import DA_login_3 from '../assets/compsci/DA_login_3.png';
import DA_login_4 from '../assets/compsci/DA_login_4.png';
import DA_deliveries_0 from '../assets/compsci/DA_deliveries_0.png';
import DA_deliveries_1 from '../assets/compsci/DA_deliveries_1.png';
import DA_deliveries_2 from '../assets/compsci/DA_deliveries_2.png';
import DA_images_2 from '../assets/compsci/DA_images_2.png';
import DA_graphics_0 from '../assets/compsci/DA_graphics_0.png'

import '../styles/Portfolio.css';

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

const DeliveryManager = () => {
    const images = {
        content: [DA_login_4,DA_deliveries_0,DA_deliveries_1],
        captions: ["delivery validation","delivery manifest","delivery form"]
    };

    return (
        <>
            <div id="dm1" className="module">
                <div className="modBlock">
                    <h2>delivery manager</h2>
                    <h5>delivery manifest</h5>
                    <p>after successful user validation, drivers are directed to the delivery manager microservice where they are immediately prompted to enter a valid delivery date and powerunit (truck id) combination.</p>
                    <p>once verified to exist in the current companies database, the driver gains access to the provided delivery manifest. with each delivery divided into uncompleted and completed drop-offs, and further ordered by stop number to help drivers keep organized.</p>
                </div>
            </div>

            <ToggleArray images={images} defaultIndex={0}/>

            <div id="dm1" className="module">
                <div className="modBlock">
                    <h5>signature + image management</h5>
                    <p>the expanded delivery information page empowers drivers to input delivery details through text and number fields, while leveraging custom-built widgets for advanced functionalities like signature collection and image capture.</p>
                    <p>the upload process involves saving an image to a pre-defined path, with the text path being the only asset stored in database. subsequent accesses request the image at the stored file path, returning the image for rendering.</p>
                </div>
            </div>

            <div className="scrollBlock">
                <img className="portfolioimg noshadow" src={DA_images_2} alt="signature/image upload process" loading="lazy"/>
            </div>
        </>
    );
};

export default DeliveryManager;