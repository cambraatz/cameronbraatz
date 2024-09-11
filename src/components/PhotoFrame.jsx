import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/PhotoFrame.module.css';

import Coding from '../assets/Coding.png';
import Landscape from '../assets/Landscape_crop.jpg';
import Neon from '../assets/Neon_crop.JPG';

const PhotoFrame = (props) => {
  /*
  *
  * // example parameter structure...
  *
  let mod_params = {
    header: "delivery manager",
    subheader: "trucking logistics",
    color: "white",
    body1: body1,
    body2: body2,
    body3: body3,
    figure: image,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
  }; 
  */
  const params = props.params;
  const image = props.image;
  const image2 = props.image2;
  const image3 = props.image3;

  switch (props.type){
    case "full":
      return(
        <div className={styles.row}>
          <div className={styles.fullframe}>
              <img src={ image } alt="art" loading="lazy"/>
          </div>
        </div>
      )
    case "1/3":
      return(
        <div className={styles.row}>
          <div className={styles.frame1}>
              <img src={ image } alt="art1" loading="lazy"/>
          </div>
          <div className={styles.frame3}>
            <img src={ image2 } alt="art3" loading="lazy"/>
          </div>
        </div>
      )
    case "3/1":
      return(
        <div className={styles.row}>
          <div className={styles.frame3}>
              <img src={ image } alt="art3" loading="lazy"/>
          </div>
          <div className={styles.frame1}>
            <img src={ image2 } alt="art1" loading="lazy"/>
          </div>
        </div>
      )
    case "double":
      return(
        <div className={styles.doublerow}>
          <div className={styles.double}>
              <img src={ image } alt="big art" loading="lazy"/>
          </div>
        </div>
      )
    case "tall/short":
      return(
        <div id={styles.tallrow} className={styles.doublerow}>
          <div className={styles.tall}>
              <img src={ image } alt="tall art" loading="lazy"/>
          </div>
          <div className={styles.short}>
              <img src={ image2 } alt="tall art" loading="lazy"/>
              <img src={ image3 } alt="tall art" loading="lazy"/>
          </div>
        </div>
      )
    case "short/tall":
      return(
        <div id={styles.tallrow} className={styles.doublerow}>
          <div className={styles.short}>
              <img src={ image2 } alt="tall art" loading="lazy"/>
              <img src={ image3 } alt="tall art" loading="lazy"/>
          </div>
          <div className={styles.tall}>
              <img src={ image } alt="tall art" loading="lazy"/>
          </div>
        </div>
      )
    default:
      return;
  }
};

export default PhotoFrame;