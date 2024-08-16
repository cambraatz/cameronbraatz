import {React, useState} from 'react';
import styles from '../styles/Carousel.module.css';

const CarouselPanel = ({ src, alt, verbose, count }) => {
    //const [verbose, setVerbose] = useState([false,false,false]);

    const handleClick = (e) => {
        const elmt = e.currentTarget
        console.log("panel click: ",elmt)
        //setVerbose(true)
        //document.getElementById(elmt).style.transform = "scale(2,0)";
    };

    return (
        <figure id={"panel" + count} className={styles.figure}>
            <img loading="lazy" src={src} alt={alt} className={styles.carouselImage} />
            <div>
                <h5>{alt}</h5>
                {/*<p id={"verbose" + count}>{verbose}</p>*/}
            </div>
        </figure>
    )
};

export default CarouselPanel;