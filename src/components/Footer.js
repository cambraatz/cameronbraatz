import React from 'react';
import LinkedInLogo from '../assets/LI_Logo.png';
import GitHubLogo from '../assets/GH_Cat_Logo.png';
import IGLogo from '../assets/IG_Logo.png';
import Gmail from '../assets/Gmail_Logo.png';

const Footer = () => {
    return (
        <nav id="footer">
            <div id="footer_logo_cont">
                <a href="https://www.linkedin.com/in/cameron-braatz/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn"/></a>
                <a href="https://github.com/cambraatz" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub"/></a>
                <a href="https://www.instagram.com/cam_braatz/" target="_blank" rel="noreferrer"><img src={IGLogo} alt="Instagram"/></a>
                {/*<a href="https://www.instagram.com/cam_braatz/" target="_blank" rel="noreferrer"><img src={Gmail} alt="Gmail"/></a>*/}
                <div id="footer_text_link">
                    <a className="footer_text" href="mailto:cameronbraatz@gmail.com" rel="noreferrer">/contact_me</a>
                </div>
            </div>
            {/*
            <div id="footer_text_cont">
                <p className="footer_text">website designed by cameron braatz</p>
            </div>
            */}
        </nav>
    );
};

export default Footer;