import React from 'react';
import Mountain from '../assets/mountain.jpg';

const Banner = () => {
    
    return (
        <div className="banner_frame">
            <img id="banner_img" src={Mountain} alt="Alpine Hike in Colorado Rockies 2020" />
        </div>
    );
};

export default Banner;