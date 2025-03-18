import React, { useState } from "react";

import ToggleArray from "./ToggleArray";

import DA_login_0 from '../assets/compsci/DA_login_0.png';
import DA_login_3 from '../assets/compsci/DA_login_3.png';
import DA_login_4 from '../assets/compsci/DA_login_4.png';

import DA_admin_0 from '../assets/compsci/DA_admin_0.png';
import DA_admin_1 from '../assets/compsci/DA_admin_1.png';
import DA_admin_2 from '../assets/compsci/DA_admin_2.png';
import DA_admin_3 from '../assets/compsci/DA_admin_3.png';
import DA_admin_4 from '../assets/compsci/DA_admin_4.png';

import DM_Overview_1 from '../assets/compsci/DM_UI_01.png';


import '../styles/Portfolio.css';

const AdminPortal = () => {
    const images = {
        content: [DA_admin_0,DA_admin_1,DA_admin_2],
        captions: ["login credentials","delivery verification","delivery manifest"]
    };

    return (
        <>
            <div id="ap0" className="module">
                <div className="modBlock">
                    <h2>admin portal</h2>
                    <h5>staff management + permissions</h5>
                    <p>users with administrative rights have the option to make direct changes to the overarching user database.</p>
                    <p>with the ability to add, edit and remove users; allowing setting the list of companies and services available for the chosen user.</p>
                </div>
            </div>

            <div className="scrollBlock">
                <img className="portfolioimg noshadow" src={DM_Overview_1} alt="signature/image upload process" loading="lazy"/>
            </div>

            <ToggleArray images={images} defaultIndex={0}/>

            <div id="ap1" className="module">
                <div className="modBlock">
                    <h5>company/service selection</h5>
                    <p>once validated, users are presented with a list of companies associated with themselves followed by a list of services they are registered to use.</p>
                    <p>the respective company determines the database for further api queries, while the chosen service redirects the user to the intended microservice...carrying along pertinent tokens/data in secure cookies to persist navigation to the chosen service.</p>
                </div>
            </div>
        </>
    );
};

export default AdminPortal;

/*
<PortfolioEntry id={styles.dm6} className={styles.dm} params={DM6_params} scroll={true}/>
<PortfolioEntry id={styles.dm7} className={styles.dm} params={DM7_params}/>
<PortfolioEntry id={styles.dm8} className={styles.dm} params={DM8_params}/>
<PortfolioEntry id={styles.dm9} className={styles.dm} params={DM9_params}/>
*/