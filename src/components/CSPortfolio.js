import React from 'react';
//import Resume from '../assets/comp_sci/2023_Resume.jpg';
import DriverApp_1 from '../assets/comp_sci/DriverApp_1.png';
import DriverApp_2 from '../assets/comp_sci/DriverApp_2.png';
import DriverApp_3 from '../assets/comp_sci/DriverApp_3.png';
import DriverApp_3A from '../assets/comp_sci/DriverApp_3A.png';
import DriverApp_4 from '../assets/comp_sci/DriverApp_4.png';
import DriverApp_5 from '../assets/comp_sci/DriverApp_5.png';
import RvOApp_1 from '../assets/comp_sci/RvOApp_1.png';
import RvOApp_2 from '../assets/comp_sci/RvOApp_2.png';
import RvOApp_3 from '../assets/comp_sci/RvOApp_3.png';
//import RvOApp_4 from '../assets/comp_sci/RvOApp_4.png';
//import RvOApp_5 from '../assets/comp_sci/RvOApp_5.png';
import RvOApp_6 from '../assets/comp_sci/RvOApp_6.png';

const CSPortfolio = () => {
    return (
        <div id="CS_portfolio">
            {/*
            <div id='compsci_portfolio'>
                <h1>Stay tuned for more!</h1>
                <img src={Resume} id='Resume' />
            </div> 
            */}
            <div className="project_links">
                <h4>projects:</h4>
                <p><a href="#deliverymanager">/delivery manager</a></p>
                <p><a href="#renttoown">/rent to own calculator</a></p>
            </div>
            <hr id="deliverymanager"/>
            <div className="portfolio_entry">
                <div className="CS_text_header">
                    <div className="LS_text_title">
                        <h2 className="welcome_title">delivery manager</h2>
                    </div>
                    <div>
                        <p>
                            This application was developed for a trucking logistics 
                            company looking for a solution for tracking driver/delivery 
                            information on a personal device. This application allows 
                            drivers to edit and maintain their personal driver logs 
                            from the convenience of their personal phone or device.
                        </p>
                        <p>
                            This prevents the need to leave the cab and manually log the 
                            data with an on-dock computer, thus streamlining the logging 
                            process and enabling drivers to adjust their records anywhere 
                            and anytime.
                        </p>
                        <p>
                            The majority of the application logic relies on a React frontend 
                            (JavaScript XML) and a ASP.NET Core backend (C#). API endpoints and 
                            processes are established in the backend to connect with the client's 
                            existing MSSQL Express database through an easy to use frontend. 
                            The application is being deployed to an in-house Linux/Apache server 
                            for hosting.
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">basic functionality</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            The following screenshots log an example of the application's workflow. 
                            Beginning with log-in credentials and delivery log validation, the application 
                            allows a driver to access their personal logs using their personal credentials 
                            while providing flexibility for accessing delivery information from previous 
                            dates and power units.
                        </p>
                        <p>
                            Verification is performed through an API which provides access to delivery 
                            information only when the provided delivery information is both valid and 
                            belonging to the corresponding driver.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={DriverApp_1} id='DriverApp_1' className='CS_image_large' alt="Driver App Snip #1"/>
                </div>
            </div>            
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">delivery verification</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Once the user credentials are validated, a popup window prompts the driver 
                            to confirm the delivery date and power unit (truck ID) to query.
                        </p>
                        <p>
                            The current date is assumed as most work through the application will be 
                            done same day, while the power unit is assumed to be the latest known truck 
                            associated with the driver in the database.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={DriverApp_2} id='DriverApp_2' className='CS_image_large' alt="Driver App Snip #2"/>
                </div>
            </div>
            {/*
            <div className="portfolio_entry">
                <div className='CS_image_div_large'>
                    <img src={DriverApp_2} id='DriverApp_2' className='CS_image_large' alt="Driver App Snip #2"/>
                </div>
                <div className="CS_text_cont_right">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">Delivery Verification</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Once the user credentials are validated, a popup window prompts the driver 
                            to confirm the delivery date and power unit (truck ID) to query.
                        </p>
                        <p>
                            The current date is assumed as most work through the application will be 
                            done same day, while the power unit is assumed to be the latest known truck 
                            associated with the driver in the database.
                        </p>
                    </div>
                </div>
            </div>
            */}
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">delivery manifest</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            When the provided date and power unit are confirmed, a list of deliveries for 
                            that driver corresponding to the given day are pulled from the database and 
                            rendered as an interactive table. Undelivered shipments are shown at the top, 
                            while delivered shipments are shown lower down.
                        </p>
                        <p>
                            Both cases allow a driver to click/hover (depending on user device) and access 
                            additional information for the chosen delivery.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={DriverApp_3} id='DriverApp_3' className='CS_image_large' alt="Driver App Snip #3"/>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">device recognition</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            The mobile version truncates a couple less essential fields from the table, 
                            while the console/tablet version will include the hidden fields. In both cases, 
                            clicking on the table entry will navigate to a page with complete delivery information 
                            for review and manipulation.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={DriverApp_3A} id='DriverApp_3A' className='CS_image_large' alt="Driver App Snip #3A"/>
                </div>
            </div>
            {/*
            <div className="portfolio_entry">
                <div className='CS_image_div_large'>
                    <img src={DriverApp_3A} id='DriverApp_3A' className='CS_image_large' alt="Driver App Snip #3A"/>
                </div>
                <div className="CS_text_cont_right">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">Device Recognition</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                        The mobile version truncates a couple less essential fields from the table, 
                        while the console/tablet version will include the hidden fields. In both cases, 
                        clicking on the table entry will navigate to a page with complete delivery information 
                        for review and manipulation.
                        </p>
                    </div>
                </div>
            </div>
            */}
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">delivery update</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Upon selection of a specific delivery, additional information is revealed and the 
                            driver is prompted to populate the pertinent delivery information needed to process 
                            a delivery.
                        </p>
                        <p>
                            If the delivery was errantly selected, the driver can return to the previous screen 
                            and select a different delivery. If the information is correct, the driver fills out 
                            the needed information and submits the changes. Doing so edits the corresponding delivery 
                            in the database, ensuring all records up to date.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={DriverApp_4} id='DriverApp_4' className='CS_image_large' alt="Driver App Snip #4"/>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">user logout</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Throughout the session, the user always has the opportunity to log out. Once the work is 
                            complete or a session is no longer needed, the user may opt to log out at anytime.
                        </p>
                        <p>
                            Clicking the logout button triggers a popout to confirm their intent before returning the user 
                            to the main menu.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={DriverApp_5} id='DriverApp_5' className='CS_image_large' alt="Driver App Snip #5"/>
                </div>
            </div>
            {/*
            <div className="portfolio_entry">
                <div className='CS_image_div_large'>
                    <img src={DriverApp_5} id='DriverApp_5' className='CS_image_large' alt="Driver App Snip #5"/>
                </div>
                <div className="CS_text_cont_right">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">User Logout</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Throughout the session, the user always has the opportunity to log out. Once the work is 
                            complete or a session is no longer needed, the user may opt to log out at anytime.
                        </p>
                        <p>
                            Clicking the logout button triggers a popout to confirm their intent before returning the user 
                            to the main menu.
                        </p>
                    </div>
                </div>
            </div>
            */}

            <hr id="renttoown"/>
            <div className="portfolio_entry">
                <div className="CS_text_header">
                    <div className="LS_text_title">
                        <h2 className="welcome_title">rent to own calculator</h2>
                    </div>
                    <div>
                        <p>
                            This application was developed as a passion project in collaboration
                            with my brother, a real estate investor, who had developed the original
                            algorithm template using MS Excel. Our intent was to repurpose the core 
                            logic into a user friendly application for use by the general population. 
                            The project also served as an exercise in establishing API's and database 
                            management.
                        </p>
                        <p>
                            Development began with a thorough analysis of the Excel formulas, variables,
                            and structure. Leveraging the Django development framework facilitated the 
                            communication between the React frontend and the Python based backend. The data
                            science libraries NumPy and PANDAs were used to replicate the original Excel 
                            functions behind the curtains, while a rich user interface built using the 
                            MaterialUI library of component templates makes the process approachable.
                        </p>
                        <p>
                            Users of this application are able to compare their current/potential rental 
                            situation with the anticipated costs of home ownership. Basic assumptions are made
                            on many of the variables to make the application approachable for the average user, 
                            such as interest rates, maintenance costs, HOA fees, etc. Advanced users are able 
                            to expand the investment specifics to further hone in on their anticipated returns.
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">basic user input</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            The following screenshots demonstrate the Rent to Own Calculator input module, showing 
                            the 'basic' input fields. The <i>casual</i> user can simply adjust these required inputs 
                            to fit their particular situation, without having to get into the weeds of more detailed
                            analytics. The input fields handle user input by managing local state data, while inferencing 
                            computed fields where applicable.
                        </p>
                        <p>
                            The results of the user input are passed across an API to be logged in a basic SQLite3 database, the Python
                            logic computes the financial forecasting and dynamically generates both a summary of key metrics, as well as 
                            tabular data on a month-to-month and annual basis for the extent of the anticipated <i>Hold Period</i>.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={RvOApp_1} id='RvOApp_1' className='CS_image_large' alt="Rent to Own App Snip #1"/>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">advanced user input</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Assumptions have been made to reflect the latest metrics for many of the non-critical inputs . Though, for 
                            users who are looking for a more customizable analysis, toggling the accordion tabs under <i>Advanced Adjustments </i> 
                            expands the field of user inputs to afford even greater control.
                        </p>
                        <p>
                            This added flexibility in the model allows for tweaking information that goes beyond a purely <i>recreational</i>
                            dive into real estate investing. Options for adjusting tax rates, buying/selling costs, home ownership costs, and
                            loan information to greater fit the user's particular situation.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={RvOApp_2} id='RvOApp_2' className='CS_image_large' alt="Rent to Own App Snip #2"/>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">owner payment summary</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            Once the user inputs are submitted, website cookies track whether a particular user has visited the site before logging 
                            the inputs and computed analysis into the SQLite3 database. Once complete, the values are returned to generate a summarized
                            analysis for quick reference. Allowing the user to directly compare the monthly and annual costs of owning and renting under
                            the provided circumstances. 
                        </p>
                        <p>
                            Ever important in today's housing market, this application can help the user get a better feel for thier particular situation
                            to make an informed decision. The highlighted fields allow for quick reference between ownership and rental situations. The second
                            table pertains more for the investment minded individual, showcasing the anticipated returns on investment for various financing 
                            conditions.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={RvOApp_3} id='RvOApp_3' className='CS_image_large' alt="Rent to Own App Snip #3"/>
                </div>
            </div>
            <div className="portfolio_entry">
                <div className="CS_text_cont_left">
                    <div className="LS_text_title">
                        <h3 className="welcome_title">cash flows</h3>
                    </div>
                    <div className="LS_text_body">
                        <p>
                            The owner payment summary from the previous section is a by-product of the long form analysis process. In quantifying the financial 
                            forecast, monthly and annual cash flows are derived for the extent of the holding period in order to determine the final return on 
                            investment. Rather than simply discarding this information, it is presented in a styled HTML table to allow focused inspection.
                        </p>
                        <p>
                            The Python logic iteratively calculates each variable for each unit of time and assigns the result to a list. Once complete,
                            a script runs through each respective list, printing its values into a raw HTML text that is returned and placed into the React 
                            frontend for rendering and subsequent CSS styling. 
                        </p>
                        <p>
                            Due to the wide breadth of metrics, hovering over the table will highlight particular rows in the table for ease of reading. Additionally, 
                            as the length of the holding period grows, so too do the tables. Overflow situations will introduce a scroll bar to ensure proper formatting
                            without losing information.
                        </p>
                    </div>
                </div>
                <div className='CS_image_div_large image_right'>
                    <img src={RvOApp_6} id='RvOApp_6' className='CS_image_large' alt="Rent to Own App Snip #6"/>
                </div>
            </div>
            <p id="stay_tuned">Stay tuned for more soon...</p>
        </div>        
    );
}

export default CSPortfolio;