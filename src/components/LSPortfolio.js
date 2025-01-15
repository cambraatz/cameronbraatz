import React from 'react';
import DCTrails1 from '../assets/landscape/DCTrails_1.jpg';
import DCTrails2 from '../assets/landscape/DCTrails_2.jpg';
import Chouteau1 from '../assets/landscape/Chouteau_1.jpg';
import Chouteau2 from '../assets/landscape/Chouteau_2.jpg';

const LSPortfolio = () => {
    return (
        <div id='landscape_portfolio'>
            <div className="project_links">
                <h4>projects:</h4>
                <p><a href="#danecounty">/Dane County Regional Trails</a></p>
                <p><a href="#chouteaus">/Chouteaus Landing</a></p>
            </div>
            <hr id="danecounty"/>
            <div className='portfolio_entry'>
                <div className='LS_text_cont_left'>
                    <div className='LS_text_title'>
                        <h2 className='welcome_title'>Dane County Regional Trail System</h2>
                    </div>
                    <div className='LS_text_body'>
                        <p>
                            Design and development of standard bike trail infrastructure typologies in the greater Madison Wisconsin area, driven by inventoried geospatial pollinator habitat indicators. 
                            ArcGIS was instrumental in the research front end and mapping graphics, while SketchUp and Photoshop were implemented for the diagramatic renderings.
                        </p>
                        <br/>
                        <p>
                            Results of regional analysis methods drove pointed development of proposed bicycle trails, prioritizing regions of high pollinator suitability to
                            ensure a cohesive network of pollinator corridors while avoiding areas unsuitable to pollinator inhabitation.
                        </p>
                    </div>
                </div>
                <div className='LS_image_div_large'>
                    <img src={DCTrails1} id='DCTrails_1' className='LS_image_large' />
                </div>
            </div>
            <div className='portfolio_entry'>
                <div className='LS_image_div_large'>
                    <img src={DCTrails2} id='DCTrails_1' className='LS_image_large' />
                </div>
                <div className='LS_text_cont_right'>
                    <div className='LS_text_body' id='DCTrails_p2'>
                        <p>
                            Regional analysis was supported with standard typologies for the various trail conditions, planting strategies for pollinators and low impact development
                            construction detailing for sustainable development practices.
                        </p>
                        <br></br>
                        <p>
                            Planting suggestions are conducive with spread seeding and native plant species to provide much needed pollinator food resources in an otherwise 
                            monocultured agrarian landscape.
                        </p>
                    </div>
                </div>
            </div>
            <hr id="chouteaus"/>
            <div className='portfolio_entry'>
                <div className='LS_text_cont_left'>
                    <div className='LS_text_title'>
                        <h2 className='welcome_title'>Chouteau's Landing</h2>
                    </div>
                    <div className='LS_text_body'>
                        <p>
                            Inventory and analysis of a prominent corridor in urban St. Louis, adjacent to the Gateway Arch, Cardinals Stadium and Mississippi Riverfront. Analysis focused on adaptive 
                            redevelopment of a neglected area of the city. Given its adjacencies, this location was selected for its high potential to reshape the downtown experience.
                        </p>
                        <br></br>
                        <p>
                            Preliminary regional research was performed using ArcGIS, on site analysis and historical context. Existing infrastructure is composed of remnant industrial
                            and train circulation. Potential connections will serve the immediate area as well as extending further into the city, providing much needed connectivity in an
                            otherwise disparate area of the city.
                        </p>
                    </div>
                </div>
                <div className='LS_image_div_large'>
                    <img src={Chouteau1} id='DCTrails_1' className='LS_image_large' />
                </div>
            </div>
            <div className='portfolio_entry'>
                <div className='LS_image_div_large'>
                    <img src={Chouteau2} id='DCTrails_1' className='LS_image_large' />
                </div>
                <div className='LS_text_cont_right'>
                    <div className='LS_text_body'>
                        <p>
                            Regional analysis was supported with standard typologies for the various trail conditions, planting strategies for pollinators and low impact development
                            construction detailing for sustainable development practices.
                        </p>
                        <br></br>
                        <p>
                            Planting suggestions are conducive with spread seeding and native plant species to provide much needed pollinator food resources in an otherwise 
                            monocultured agrarian landscape.
                        </p>
                    </div>
                </div>
            </div>
            <p id="stay_tuned">Stay tuned for more soon...</p>
        </div>
    );
}

export default LSPortfolio;