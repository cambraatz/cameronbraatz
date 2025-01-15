import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import LSPortfolio from '../components/LSPortfolio';

function Landscape() {
    return (
        <div id='landscape_page'>
            <NavBar />
            <LSPortfolio />
            <Footer />
        </div>
    )
}

export default Landscape;