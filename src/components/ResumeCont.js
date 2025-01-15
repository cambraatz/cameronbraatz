import React from 'react';

const ResumeCont = () => {
    return (
        <div className="resume_cont">
            <div className="resume_row">
                <p className="resume_header">Skills</p>
                <div className="resume_column">
                    <div className="list_header">
                        <p className="primary_list_text">Software Engineering</p>
                    </div>
                    <div className="resume_body">
                        <div className="resume_list">
                            <p className="secondary_list_text">Full-Stack Software Development</p>
                            <p className="secondary_list_text">Application Design + Development</p>
                            <p className="secondary_list_text">Website Design + Development</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Algorithms + Algorithmic Strategies</p>
                            <p className="secondary_list_text">Data Structures + Data Representation</p>
                            <p className="secondary_list_text">Data Analysis + Information Visualization</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Artificial Intelligence Algorithms</p>
                            <p className="secondary_list_text">SQL + NoSQL Database Management</p>
                            <p className="secondary_list_text">Apache Web Server Implementation</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Linux Server Management + Processes</p>
                            <p className="secondary_list_text">Python, C++, Scala, JavaScript, HTML, CSS</p>
                            <p className="secondary_list_text">React, .NET, Django, Flask</p>
                        </div>
                    </div>
                </div>
                <div className="resume_column">
                    <div className="list_header">
                        <p className="primary_list_text">Landscape Architecture</p>
                    </div>
                    <div className="resume_body">
                        <div className="resume_list">
                            <p className="secondary_list_text">Ornamental Planting Design</p>
                            <p className="secondary_list_text">Single Family Residential Design</p>
                            <p className="secondary_list_text">Multifamily Residential + Amenity Design</p>
                            <p className="secondary_list_text">Construction Details + Documentation</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Public Park + Trail Design</p>
                            <p className="secondary_list_text">Corporate + Academic Campus Design</p>
                            <p className="secondary_list_text">Iterative Concept Generation</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Hand + Digital Presentation Graphics</p>
                            <p className="secondary_list_text">General Site Survey + Analysis</p>
                            <p className="secondary_list_text">Construction Management + Administration</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Stormwater Management</p>
                            <p className="secondary_list_text">Productive Garden Design</p>
                            <p className="secondary_list_text">Grading + Drainage</p>
                        </div>
                    </div>
                </div>
                <div className="resume_column">
                    <div className="list_header">
                        <p className="primary_list_text">General Skills</p>
                    </div>
                    <div className="resume_body">
                        <div className="resume_list">
                            <p className="secondary_list_text">Project Management + Budgeting</p>
                            <p className="secondary_list_text">Client Interaction + Presentation</p>
                            <p className="secondary_list_text">Active Mentoring + Coaching</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Woodworking + Furniture Design</p>
                            <p className="secondary_list_text">Neon Sign Fabrication</p>
                            <p className="secondary_list_text">Organic Gardening Techniques</p>
                        </div>
                    </div>
                </div>
            </div>
            <p id="education_tag" className="resume_header">Education</p>
            <div className="resume_row education">
                <div className="resume_column">
                    <div className="list_header">
                        <p className="primary_list_text">University of Wisconsin - Madison</p>
                    </div>
                    <p className="secondary_list_text">Bachelor of Science - Landscape Architecture</p>
                    <p className="secondary_list_text">Certificate of Fine Art - Sculpture (Glass/Wood)</p>
                    <p className="secondary_list_text">Graduated Spring 2018</p>
                </div>
                <div className="resume_column">
                    <div className="list_header">
                        <p className="primary_list_text">University of Colorado - Boulder*</p>
                    </div>
                    <p className="secondary_list_text">Bachelor of Science - Applied Computer Science</p>
                    <p className="secondary_list_text">Anticipated Graduation Fall 2024</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCont;
