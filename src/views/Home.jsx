import React from "react";
import Header from "../components/Header"
import IntroSection from "../components/Intro";
import Carousel from '../components/Carousel';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

import Banner from '../assets/mountain.jpg';
import styles from '../styles/Homepage.module.css';

const Homepage = () => {
    return (
        <div>
            <Header/>
            <div className={styles.banner}>
                <img
                    className="banner_img"
                    loading="lazy"
                    src={Banner}
                    alt="Profile"
                />
            </div>
            <IntroSection/>
            <Carousel/>
            <Skills/>
            <Footer page="home"/>
        </div>
    );
};

export default Homepage;