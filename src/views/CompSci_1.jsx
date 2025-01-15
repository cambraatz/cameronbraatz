import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import Fig0 from '../assets/RvOApp_1.png';
import Fig1 from '../assets/RvOApp_2.png';
import Fig2 from '../assets/RvOApp_3.png';
import Fig3 from '../assets/RvOApp_6.png';
import Fig4 from '../assets/RvOApp_Update0.png';
import Fig5 from '../assets/RvOApp_Update2.png';

import styles from '../styles/Portfolio.module.css';

const DM0_params = {
    header: "rent to own calculator",
    subheader: "real estate investment",
    color: "#fffff",
    body1: "this application was developed in collaboration with my brother, a real estate investor, who had developed the original algorithm template using ms excel. our intent was to repurpose the core logic into a user friendly application for use by the general population. the project also served as an exercise in establishing api's and database management.",
    body2: "development began with a thorough analysis of the excel formulas, variables, and structure. leveraging the django development framework facilitated the communication between the react frontend and the python based backend. the data science libraries numpy and pandas were used to replicate the original excel functions behind the curtains, while a rich user interface built using the materialui library of component templates makes the process approachable.",
    body3: "users of this application are able to compare their current/potential rental situation with the anticipated costs of home ownership. basic assumptions are made on many of the variables to make the application approachable for the average user, such as interest rates, maintenance costs, hoa fees, etc. advanced users are able to expand the investment specifics to further hone in on their anticipated returns.\n NOTE: this project is actively receiving a face lift, see the end of the page for updates and come back soon to see the redesign!",
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
    body1: "in the process of predicting the long term financial forecast, monthly and annual cash flows are generated for the extent of the holding period. rather than simply discarding this information, it is presented in a styled html table to allow focused inspection.",
    body2: "the python algorithm calculates the values for each variable during the extent of the study period, logging the results as a series of lists. once complete, a script runs through each respective list, printing its values into a raw html text that is returned to the react frontend for rendering.",
    body3: null,
    figure1: Fig3,
    figure2: null,
    alt: "delivery manager figure 1.3",
    caption: "responsive design"
};
const DM5_params = {
    header: "on the boards",
    subheader: "v1.1",
    color: "white",
    body1: "originally developed as an introduction to application development, the intention was always to return and redevelop the application before deployment.",
    body2: "this next iteration focuses development on simplifying user inputs and outputs and streamlining the overall ux/ui experience.",
    body3: null,
    figure1: Fig4,
    figure2: null,
    alt: "delivery manager figure 1.3",
    caption: "responsive design"
};
const DM6_params = {
    header: null,
    subheader: "updates",
    color: "white",
    body1: "on revisiting the app, i decided to replace the django backend for one using .net core. in my experience, the integration with the react frontend was much smoother using the latter.",
    body2: "this version collects user input on the client machine packages it and sends it to the server to run the core Python logic. Come back to soon to see the implementation and info viz updates!",
    body3: null,
    figure1: Fig5,
    figure2: null,
    alt: "delivery manager figure 1.3",
    caption: "responsive design"
};

const NOTE = "NOTE: this project is actively receiving a face lift, see the end of the page for updates and come back soon to see the redesign!";

const CompSci_1 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="compsci" />
            <PortfolioEntry params={DM0_params}/>
            <p id={styles.note}>{NOTE}</p>
            <PortfolioEntry params={DM1_params}/>
            <PortfolioEntry params={DM2_params}/>
            <PortfolioEntry params={DM3_params}/>
            <PortfolioEntry params={DM4_params}/>
            <PortfolioEntry params={DM5_params}/>
            <PortfolioEntry params={DM6_params}/>
            <span className="half_buffer"></span>
            <Footer page="/compsci/2" dest="delivery scanner"/>
        </>
    );
};

export default CompSci_1;