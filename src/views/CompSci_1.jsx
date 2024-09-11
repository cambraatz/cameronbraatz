import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig0 from '../assets/RvOApp_1.png';
import Fig1 from '../assets/RvOApp_2.png';
import Fig2 from '../assets/RvOApp_3.png';
import Fig3 from '../assets/RvOApp_6.png';

import styles from '../styles/Portfolio.module.css';

const DM0_params = {
    header: "rent to own calculator",
    subheader: "real estate investment",
    color: "#fffff",
    body1: "this application was developed in collaboration with my brother, a real estate investor, who had developed the original algorithm template using ms excel. our intent was to repurpose the core logic into a user friendly application for use by the general population. the project also served as an exercise in establishing api's and database management.",
    body2: "development began with a thorough analysis of the excel formulas, variables, and structure. leveraging the django development framework facilitated the communication between the react frontend and the python based backend. the data science libraries numpy and pandas were used to replicate the original excel functions behind the curtains, while a rich user interface built using the materialui library of component templates makes the process approachable.",
    body3: "users of this application are able to compare their current/potential rental situation with the anticipated costs of home ownership. basic assumptions are made on many of the variables to make the application approachable for the average user, such as interest rates, maintenance costs, hoa fees, etc. advanced users are able to expand the investment specifics to further hone in on their anticipated returns.",
    figure1: null,
    figure2: null,
    alt: null,
    caption: null
};
const DM1_params = {
    header: null,
    subheader: "basic user input",
    color: "#CBDCF4",
    body1: "the following screenshots demonstrate the rent to own calculator input module, showing the 'basic' input fields. the casual user can simply adjust these required inputs to fit their particular situation, without having to get into the weeds of more detailed analytics. the input fields handle user input by managing local state data, while inferencing computed fields where applicable.",
    body2: "the results of the user input are passed across an api to be logged in a basic sqlite3 database, the python logic computes the financial forecasting and dynamically generates both a summary of key metrics, as well as tabular data on a month-to-month and annual basis for the extent of the anticipated hold period.",
    body3: null,
    figure1: Fig0,
    figure2: null,
    alt: "delivery manager figure 1.0",
    caption: "user validation and landing page"
};
const DM2_params = {
    header: null,
    subheader: "advanced user input",
    color: "white",
    body1: "assumptions have been made to reflect the latest metrics for many of the non-critical inputs . though, for users who are looking for a more customizable analysis, toggling the accordion tabs under advanced adjustments expands the field of user inputs to afford even greater control.",
    body2: "this added flexibility in the model allows for tweaking information that goes beyond a purely recreationaldive into real estate investing. options for adjusting tax rates, buying/selling costs, home ownership costs, and loan information to greater fit the user's particular situation.",
    body3: null,
    figure1: Fig1,
    figure2: null,
    alt: "delivery manager figure 1.1",
    caption: "delivery/driver verification prompt"
};
const DM3_params = {
    header: null,
    subheader: "owner payment summary",
    color: "white",
    body1: "once the user inputs are submitted, website cookies track whether a particular user has visited the site before logging the inputs and computed analysis into the sqlite3 database. once complete, the values are returned to generate a summarized analysis for quick reference. allowing the user to directly compare the monthly and annual costs of owning and renting under the provided circumstances.",
    body2: "ever important in today's housing market, this application can help the user get a better feel for their particular situation to make an informed decision. the highlighted fields allow for quick reference between ownership and rental situations. the second table pertains more for the investment minded individual, showcasing the anticipated returns on investment for various financing conditions.",
    body3: null,
    figure1: Fig2,
    figure2: null,
    alt: "delivery manager figure 1.2",
    caption: "delivery manifest"
};
const DM4_params = {
    header: null,
    subheader: "cash flows",
    color: "white",
    body1: "the owner payment summary from the previous section is a by-product of the long form analysis process. in quantifying the financial forecast, monthly and annual cash flows are derived for the extent of the holding period in order to determine the final return on investment. rather than simply discarding this information, it is presented in a styled html table to allow focused inspection.",
    body2: "the python logic iteratively calculates each variable for each unit of time and assigns the result to a list. once complete, a script runs through each respective list, printing its values into a raw html text that is returned and placed into the react frontend for rendering and subsequent css styling.",
    body3: "due to the wide breadth of metrics, hovering over the table will highlight particular rows in the table for ease of reading. additionally, as the length of the holding period grows, so too do the tables. overflow situations will introduce a scroll bar to ensure proper formatting without losing information.",
    figure1: Fig3,
    figure2: null,
    alt: "delivery manager figure 1.3",
    caption: "responsive design"
};

const CompSci_1 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="compsci" />
            <PortfolioEntry params={DM0_params}/>
            <PortfolioEntry params={DM1_params}/>
            <PortfolioEntry params={DM2_params}/>
            <PortfolioEntry params={DM3_params}/>
            <PortfolioEntry params={DM4_params}/>
            <span className="half_buffer"></span>
            <Footer page="/compsci/1" dest="delivery scanner"/>
        </>
    );
};

export default CompSci_1;