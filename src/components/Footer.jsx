import React from "react";
import styles from '../styles/Footer.module.css';

import Instagram from '../assets/Instagram.svg';
import Linkedin from '../assets/Linkedin.svg';
import Github from '../assets/Github.svg';
import Gmail from '../assets/Mail.svg';

const Icon = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );
  
const Footer = (props) => {
    const icons = [
        { src: Instagram, alt: "Instagram" },
        { src: Linkedin, alt: "Linkedin" },
        { src: Github, alt: "Github" },
    ];

    let prompt = ""
    switch(props.page) {
        case "home":
            prompt = "back to top...";
            break;
        default:
            prompt = "next project: coming soon ...";
            break;
    }

    return (
        <section className={styles.banner}>
            <header className={styles.announcement}>
                <h3><a href="#top">{prompt}</a></h3>
            </header>
            <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                    {icons.map((icon, index) => (
                        <Icon key={index} src={icon.src} alt={icon.alt} className={styles.icon} />
                    ))}
                </div>
                <Icon src={Gmail} alt="Last Icon" className={styles.lastIcon} />
            </div>
        </section>
    );
};

export default Footer;