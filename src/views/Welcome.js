import React from "react";
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import WelcomeBanner from '../components/WelcomeBanner';
import CardBanner from '../components/CardBanner';
import Footer from '../components/Footer';

function Welcome() {
    return (
        <div>
            <NavBar />
            <Banner />
            <WelcomeBanner />
            <CardBanner />
            <Footer />
        </div> 
    )
}

export default Welcome;