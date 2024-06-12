import React from 'react';
import LinkCard from './LinkCard';
import LAImage from '../assets/EastCourtyard.jpg';
import CSSnip from '../assets/CS.jpg';
import GardenDesign from '../assets/garden_design_1.jpg';
import Artwork from '../assets/DSC_0322.jpg';

const CardBanner = () => {
    return(
        <div className="CardBox">
            <LinkCard className="Card" image={CSSnip} title='computer science' />
            <LinkCard className="Card" image={LAImage} title='landscape design' />
            <LinkCard className="Card" image={Artwork} title='art // photography' />
            <LinkCard className="Card" image={GardenDesign} title='hobbies' />
        </div>
    );
};

export default CardBanner;
