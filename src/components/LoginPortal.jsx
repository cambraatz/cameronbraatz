import React, { useState } from "react";

import ToggleArray from "./ToggleArray";

import DA_login_0 from '../assets/compsci/DA_login_0.png';
import DA_login_3 from '../assets/compsci/DA_login_3.png';
import DA_login_4 from '../assets/compsci/DA_login_4.png';

import '../styles/Portfolio.css';

const LoginPortal = () => {
    const images = {
        content: [DA_login_0,DA_login_3,DA_login_4],
        captions: ["login credentials","delivery verification","delivery manifest"]
    };

    return (
        <>
            <div id="lp0" className="module">
                <div className="modBlock">
                    <h2>login portal</h2>
                    <h5>user validation</h5>
                    <p>the login portal serves as a secure entry point for both drivers and administrative users, providing tailored access to delivery and management tools.</p>
                    <p>utilizing username and password credentials, the portal ensures that only authorized users gain access.</p>
                    <p>successful login initiates a time-based token verification process, safeguarding all subsequent api requests and sensitive resources.</p>
                </div>
            </div>

            <ToggleArray images={images} defaultIndex={0}/>

            <div id="lp1" className="module">
                <div className="modBlock">
                    <h5>company/service selection</h5>
                    <p>once validated, users are presented with a list of companies associated with themselves followed by a list of services they are registered to use.</p>
                    <p>the respective company determines the database for further api queries, while the chosen service redirects the user to the intended microservice...carrying along pertinent tokens/data in secure cookies to persist navigation to the chosen service.</p>
                </div>
            </div>
        </>
    );
};

export default LoginPortal;

/*
<PortfolioEntry id={styles.dm6} className={styles.dm} params={DM6_params} scroll={true}/>
<PortfolioEntry id={styles.dm7} className={styles.dm} params={DM7_params}/>
<PortfolioEntry id={styles.dm8} className={styles.dm} params={DM8_params}/>
<PortfolioEntry id={styles.dm9} className={styles.dm} params={DM9_params}/>
*/