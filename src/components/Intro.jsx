import React from 'react';
import '../styles/Intro.css';

//import Headshot from '../assets/canoe.jpg';
import Headshot from '../assets/Headshot.JPG';

const IntroSection = () => {
  return (
    <section className="intro">
        <div className="background">
            <img
                loading="lazy"
                src={Headshot}
                className="profileImage"
                alt="Profile"
            />
            <div className="contentWrapper">
                <h3 className="greeting">about me</h3>
                <p className="description">
                    i'm a denver-based software engineer and landscape designer with over 6 years of professional design, development and management experience
                </p>
                <p className="location">
                    this page serves as a collection of work from my professional + academic projects over my career
                </p>
            </div>
        </div>
    </section>
  );
};

export default IntroSection;