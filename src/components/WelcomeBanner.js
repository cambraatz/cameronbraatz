import React from 'react';
import Headshot from '../assets/canoe1.jpg'
import ResumeCont from './ResumeCont';

const WelcomeBanner = () => {
    return (
        <div>
            {/*<h2 id="welcome_title">Welcome</h2>*/}
            <div id="welcome_box">
                
                <div className="welcome_text_cont">
                    {/*<h2 id="welcome_title">Welcome</h2>*/}
                    <p className="welcome_header">Hello!</p>
                    <p id="welcome_text">
                        I'm a software engineer and landscape architect based out of Denver, Colorado.
                        I have over 6 years of experience as a landscape designer and have been developing applications for a small 
                        trucking logistics company while earning a second bachelors degree in computer science. I will be graduating in
                        December of 2024 and am always open for new opportunities!
                        <br/><br/>
                        This website serves as a living collection of my personal, professional and academic work over the years. 
                        While I am passionate about continuing my education/professional experience in design, architecture and 
                        computer science, I am always down to get out and enjoy everything Colorado has to offer. I love to garden,
                        hike, bike, camp and get outside.
                        <br/><br/>
                        Please excuse any incomplete portions of this site, I keep busy juggling work, school and life and can only develop this thing so fast :). 
                        If there is anything you are interested in but cannot find on my page, please reach out to me!
                        
                        <br/><br/>
                        Cameron Braatz<br/>
                        <a href="mailto:cameronbraatz@gmail.com">cameronbraatz@gmail.com</a><br/>
                        608.212.7955
                        <br/><br/><br/>
                    </p>
                    <div className="welcome_img_cont">
                        <img id="welcome_pic" src={Headshot} alt="Headshot of Cameron"/>
                    </div>
                </div>
            </div>
            <ResumeCont />
        </div>
    );
}

export default WelcomeBanner;