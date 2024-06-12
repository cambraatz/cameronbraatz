import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import CSPortfolio from '../components/CSPortfolio';

function ComputerScience() {
    return (
        <div id='compsci_page'>
            <NavBar />
            <CSPortfolio />
            <Footer />
        </div>
    )
}

export default ComputerScience;