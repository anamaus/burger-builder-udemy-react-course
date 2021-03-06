import React from 'react';
import classes from './ToggleButton.css';

const toggleButton = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default toggleButton;