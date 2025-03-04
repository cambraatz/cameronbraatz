import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

import { ReactComponent as Instagram } from '../assets/Instagram.svg';
import { ReactComponent as Linkedin } from '../assets/Linkedin.svg';
import { ReactComponent as Github } from '../assets/Github.svg';
import { ReactComponent as Gmail } from '../assets/Mail.svg';

/*const Icon = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );*/
const Icon = ({ src, alt, className, style, ...props }) => {
    const SvgIcon = src;
    return <SvgIcon aria-label={alt} className={className} {...props} />;
}
  
const Footer = (props) => {
    const navigate = useNavigate();

    const icons = [
        { src: Instagram, alt: "Instagram", url: "https://www.instagram.com/cam_braatz/" },
        { src: Linkedin, alt: "Linkedin", url: "https://www.linkedin.com/in/cameron-braatz" },
        { src: Github, alt: "Github", url: "https://github.com/cambraatz" },
    ];

    let prompt = ""
    switch(props.dest) {
        case "/":
            prompt = "back to top...";
            break;
        case null:
            prompt = "next project: coming soon...";
            break;
        case "null":
            prompt = "next project: coming soon...";
            break;
        default:
            prompt = `next project: ${props.dest}>>>`;
            break;
    }

    const handleClick = (e) => {
        //console.log(e.target);
        //console.log("props.page: ", props.page)
        switch(props.page) {
            case "/":
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/compsci/0":
                navigate("/compsci/1");
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/compsci/1":
                navigate("/compsci/2");
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/compsci/2":
                navigate("/compsci/3");
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/compsci/3":
                navigate("/");
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/landscape/0":
                navigate("/landscape/1")
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/landscape/1":
                navigate("/landscape/2")
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/landscape/2":
                //navigate("/")
                navigate("/landscape/3")
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/landscape/3":
                navigate("/landscape/4")
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/landscape/4":
                navigate("/")
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "/hobbies":
                navigate("/")
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            default:
                console.log(`invalid page navigation, establish route for ${props.page}`)
        }
    };

    return (
        <section className={styles.banner}>
            <div className={styles.announcement}>
                <h3 id="page_link" onClick={handleClick}>{prompt}</h3>
            </div>
            <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                    {icons.map((icon, index) => (
                        <a href={icon.url} target="_blank" rel="noreferrer noopener" key={index}><Icon id={icon.alt} src={icon.src} alt={icon.alt} className={styles.icon}/></a>
                    ))}
                </div>
                <a href="mailto:cameronbraatz@gmail.com" target="_blank" rel="noreferrer noopener"><Icon src={Gmail} alt="Last Icon" className={styles.lastIcon} /></a>
            </div>
        </section>
    );
};

export default Footer;