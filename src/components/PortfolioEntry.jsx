import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Portfolio.module.css';

import Coding from '../assets/Coding.png';
import Landscape from '../assets/Landscape_crop.jpg';
import Neon from '../assets/Neon_crop.JPG';

const PortfolioEntry = (props) => {
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
  let params = props.params;
  const shadow = props.shadow === undefined ? true : props.shadow;

  //const params = props.params;
  //const imgID = props.id.slice(0,13) + "IMG";
  //console.log(imgID);
  let figure1 = null;
  if(props.scroll === true){
    figure1 = params.figure1 && shadow ? <div className={styles.scrollBlock}><img id={styles.portfolioimg} className={styles.figure} src={params.figure1} alt={params.alt} loading="lazy"/></div> : null;
    figure1 = params.figure1 && !shadow ? <div className={styles.scrollBlock}><img id={styles.portfolioimg} className={styles.noshadow} src={params.figure1} alt={params.alt} loading="lazy"/></div> : figure1;
  }
  else {
    figure1 = params.figure1 && shadow ? <div className={styles.imgBlock}><img className={styles.figure} src={params.figure1} alt={params.alt} loading="lazy"/></div> : null;
    figure1 = params.figure1 && !shadow ? <div className={styles.imgBlock}><img className={styles.noshadow} src={params.figure1} alt={params.alt} loading="lazy"/></div> : figure1;
  }
  
  
  //if(!shadow) {
  //  figure1 = <div className={styles.imgBlock}><img className={[styles.figure,styles.noshadow]} src={params.figure1} alt={params.alt}/></div>;
  //}

  if(params.subheader === null){
    //document.getElementById(props.id).style.width = "50%";
    return(
      <div id={props.id} className={ styles.imgmodule }>
          { figure1 }
      </div>
    )
  };

  return (
      <div id={props.id} className={ styles.module }>
          <div className={ styles.modBlock }>
              <h2>{ params.header }</h2>
              <h5>{ params.subheader }</h5>
              <p>{ params.body1 }</p>
              <p>{ params.body2 }</p>
              <p>{ params.body3 }</p>
          </div>
          { figure1 }
      </div>
  );
};

export default PortfolioEntry;