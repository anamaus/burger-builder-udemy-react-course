import React from 'react';
import classes from "./Toolbar.css";
import Logo from '../../Logo/Logo';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton';
import NavigationItems from '../NavigationItems/NavigationItems'
//due to css modules, logo class can be defined in mul[tiple files, they won't interfere with each other

const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <ToggleButton clicked={props.toggleSideDrawer} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
    )
};

export default toolbar;