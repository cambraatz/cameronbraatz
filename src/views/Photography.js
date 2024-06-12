import React from 'react';
import NavBar from '../components/Navbar';
import PhotoGrid from '../components/PhotoGrid';
import Footer from '../components/Footer';

function Photography() {
    return (
        <div id='photo_page'>
            <NavBar />
            <PhotoGrid />
            <Footer />
        </div>
    )
}

export default Photography;