import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";
import PhotoFrame from "../components/PhotoFrame";

import Float0 from "../assets/artwork/Float0.jpg";
import Float1 from "../assets/artwork/Float1.jpg";
import BoxTable from "../assets/artwork/BoxTable.jpg";
import BoxTable1 from "../assets/artwork/BoxTable1.jpg";
import BoxTable2 from "../assets/artwork/BoxTable2.jpg";
import BoxTable3 from "../assets/artwork/BoxTable3.jpg";
import BoxTable4 from "../assets/artwork/BoxTable5.jpg";

import Glass0 from "../assets/artwork/Glass0.jpg";
import Glass1 from "../assets/artwork/Glass1.jpg";
import Rainbow0 from "../assets/artwork/Rainbow.JPG";
import Rainbow1 from "../assets/artwork/Rainbow1.JPG";
import Rainbow2 from "../assets/artwork/RainbowPulse.jpg";

import BlueFace from "../assets/artwork/Face.jpg";
import Faces0 from "../assets/artwork/Faces1.jpg";
import Faces2 from "../assets/artwork/Faces3.JPG";

import Greens from "../assets/artwork/Greens.JPG";
import Carrots from "../assets/artwork/Carrots.jpg";
import Squash from "../assets/artwork/Squash.JPG";
import Zinnia from "../assets/artwork/Zinnia.jpg";
import Garden2023 from "../assets/artwork/2023Garden.jpg";

import Sesame from "../assets/artwork/SesameBread.jpg";
import GGSando from "../assets/artwork/GGSando.jpg";
import Artisan from "../assets/artwork/Artisan0.jpg";
import BLT from "../assets/artwork/BLTLemon.jpg";
import Stripped from "../assets/artwork/StripLoaf.jpg";

import styles from '../styles/PhotoFrame.module.css';

const intro = {
    header: "art // hobbies",
    subheader: "academic artwork and recreational past times",
    color: "#fffff",
    body1: "collection of recreational and academic woodworking, neon and glass fabrication, as well as a few pictures from my community garden plot and some of the best loaves of sourdough over the years.",
    body2: "this page will be kept up to date as subsequent garden seasons pass, passion projects are completed, and delicious loaves are baked. i am very passionate about all of my hobbies and are more than happy to talk your ear off, reach out if you are at all curious!",
    figure1: null,
    alt: null,
    caption: null
};

const Hobby_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <div className={styles.banner}>
                <img
                    className="banner_img"
                    loading="lazy"
                    src={BlueFace}
                    alt="Profile"
                />
            </div>
            <PortfolioEntry id={styles.pp0} params={intro}/>
            <div id={styles.photogrid}>
                <PhotoFrame image={Float0} type="full" />
                <PhotoFrame image={BoxTable4} image2={Float1} type="1/3" />
                <PhotoFrame image={BoxTable3} image2={BoxTable1} type="3/1" />
                
                <PhotoFrame image={Glass0} type="double" />
                <PhotoFrame image={Rainbow0} image2={Glass1} type="1/3" />
                <PhotoFrame image={Rainbow2} image2={Rainbow1} image3={Faces0} type="short/tall" />
                <PhotoFrame image={Faces2} type="double" />

                <PhotoFrame image={Greens} image2={Zinnia} type="3/1" />
                <PhotoFrame image={Squash} type="double" />
                <PhotoFrame image={Garden2023} image2={Carrots} image3={Sesame} type="tall/short" />

                <PhotoFrame image={Stripped} type="double" />
                <PhotoFrame image={BLT} image2={GGSando} type="1/3" />
            </div>

            <span className="half_buffer"></span>
            <Footer page="/hobbies" dest={null}/>
        </>
    );
};

export default Hobby_0;