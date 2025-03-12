import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills">
        <div id="skillsExperience">
            <div className="contentWrapper">
                <h3 className="skillsHeader">experience</h3>
                <h5 className="description">software engineering</h5>
                <p className="list">
                    full-stack software development
                </p>
                <p className="list">
                    application design + development
                </p>
                <p className="list">
                    website design + development
                </p>
                <p className="list">
                    algorithms + algorithmic strategies
                </p>
                <p className="list">
                    data structures + data representation
                </p>
                <p className="list">
                    data analysis + information visualization
                </p>
                <p className="list">
                    artificial intelligence algorithms
                </p>
                <p className="list">
                    sql + nosql database management
                </p>
                <p className="list">
                    apache web server implementation
                </p>
                <p className="list">
                    linux server management + processes
                </p>
                <p className="list">
                    python, c++, c#, scala, javascript, html, css
                </p>
                <p className="list">
                    figma, adobe creative suite, sketchup, lumion
                </p>
                <p className="list">
                    react, .net, django, flask
                </p>
            </div>
            <div className="contentWrapper tail">
                <h5 className="description">landscape architecture</h5>
                <p className="list">
                    ornamental planting design
                </p>
                <p className="list">
                    single family residential design
                </p>
                <p className="list">
                    multifamily residential + amenity design
                </p>
                <p className="list">
                    construction details + documentation
                </p>
                <p className="list">
                    public park + trail design
                </p>
                <p className="list">
                    corporate + academic campus design
                </p>
                <p className="list">
                    hand + digital presentation graphics
                </p>
                <p className="list">
                    general site survey + analysis
                </p>
                <p className="list">
                    construction management + administration
                </p>
                <p className="list">
                    productive garden design
                </p>
                <p className="list">
                    project management + budgeting
                </p>
                <p className="list">
                    3d modeling + rendering
                </p>
                <p className="list">
                    arcgis regional analysis
                </p>
            </div>
        </div>
        
        <div id="skillsEducation">
            <div className="contentWrapper">
                <h3 className="skillsHeader">education</h3>
                <h5 className="description">university of colorado - boulder</h5>
                <p className="list">
                    bachelor of science - applied computer science
                </p>
                <p className="list">
                    summa cum laude
                </p>
                <p className="list">
                    graduated fall 2024
                </p>
                <br/>
                <h5 className="description">university of wisconsin - madison</h5>
                <p className="list">
                    bachelor of science - landscape architecture
                </p>
                <p className="list">
                    certificate of fine art - sculpture (glass/wood)
                </p>
                <p className="list">
                    graduated spring 2018
                </p>
            </div>
            <a href="/CB_Resume.pdf" target="_blank" rel="noopener noreferrer" id="resume_link"><h5>[see resume for more]</h5></a>
        </div>
        
    </section>
  );
};

export default Skills;