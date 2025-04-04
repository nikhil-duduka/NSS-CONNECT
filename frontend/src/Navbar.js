import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return ( <
        AppBar position = "static"
        color = "primary" >
        <
        Toolbar >
        <
        Typography variant = "h6"
        style = {
            { flexGrow: 1 } } >
        NSS Connect <
        /Typography> <
        Button color = "inherit"
        component = { Link }
        to = "/" > Home < /Button> <
        Button color = "inherit"
        component = { Link }
        to = "/events" > Events < /Button> <
        Button color = "inherit"
        component = { Link }
        to = "/profile" > Profile < /Button> <
        /Toolbar> <
        /AppBar>
    );
};

export default Navbar;