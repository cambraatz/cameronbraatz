import React from "react";
import Welcome from "./Welcome.js"
import Photography from "./Photography.js";
import Landscape from "./Landscape.js";
import ComputerScience from "./ComputerScience.js";

import { 
    BrowserRouter as Router, 
    Switch, 
    Route,
    Routes,
    Link, 
    Redirect,
} from "react-router-dom";


function HomePage() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Welcome />} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/photography' element={<Photography />} />
                <Route path='/landscape' element={<Landscape />} />
                <Route path='/comp_sci' element={<ComputerScience />} />
                {/*<Route exact path='/' element={<NavBar />} />*/}
                {/*<Route path='/photography' element={<Photography />} />*/}
            </Routes>
        </Router>
    )
}

export default HomePage;
