import React from 'react';
//need to import image and dinamically set it in img source because of how webpack handles files
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="logo"/>
        </div>
    )
};

export default logo;