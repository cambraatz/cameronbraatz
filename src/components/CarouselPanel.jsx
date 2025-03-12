import {React, useState} from 'react';
import '../styles/Carousel.css';

const CarouselPanel = ({ count, src, alt }) => {
    const panel = {
        0: "left",
        1: "center",
        2: "right"
    };

    const ident = "panel_" + panel[count];

    var format = "skinny";
    if (count === 1) {
        format = "wide";
    }

    return (
        <figure id={ident} className={`figure panel ${format}`}>
            <img loading="lazy" src={src} alt={alt} className="carouselImage" />
            <div>
                <h5>{alt}</h5>
            </div>
        </figure>
    )
};

export default CarouselPanel;