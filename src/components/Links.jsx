import React from "react";
import { useNavigate } from "react-router-dom";

import styles from '../styles/Portfolio.module.css';


const LinksArray = (props) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        //console.log(e.target.id)
        switch(e.target.id){
            case "deliverymanager":
                navigate("/compsci/0");
                break;
            case "renttoown":
                navigate("/compsci/1");
                break;
            case "deliveryscanner":
                navigate("/compsci/2");
                break;
            case "multifamily":
                navigate("/landscape/0");
                break;
            case "regionalpark":
                navigate("/landscape/1");
                break;
            case "modernresidential":
                navigate("/landscape/2");
                break;
            /*case "mountainmodern":
                navigate("/landscape/3");
                break;
            case "corporatecampus":
                navigate("/landscape/4");
                break;*/
            default:
                break
        }
    };

    if(props.page === "compsci"){
        return (
            <div className={styles.links} onClick={handleClick}>
                <h3>projects:</h3>
                <h5 id="deliverymanager">{`>>>`} delivery manager</h5>
                <h5 id="renttoown">{'>>>'} rent to own calculator</h5>
                <h5 id="deliveryscanner">{'>>>'} delivery scanner</h5>
            </div>
        );
    }
    else if (props.page === "landscape"){
        return (
            <div className={styles.links} onClick={handleClick}>
                <h3>projects:</h3>
                <h5 id="multifamily">{`>>>`} multi family residential</h5>
                <h5 id="regionalpark">{`>>>`} regional park concepts</h5>
                <h5 id="modernresidential">{`>>>`} modern residential</h5>
                {/*<h5 id="mountainmodern">{`>>>`} mountain modern</h5>
                <h5 id="corporatecampus">{'>>>'} corporate campus design</h5>
                <h5 id="masterplanning">{`>>>`} master planning</h5> */}
            </div>
        );
    }
};

export default LinksArray;