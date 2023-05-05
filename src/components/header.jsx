
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "./base.css";

class Header extends Component {

    render() {
        return (
        <Box className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catalogue">Student Spoofer</a>
            <a className="mobile-header" href="/catalogue">Student Spoofer</a>
            {/* <a className="download" href='/instructions' >Instructions</a> */}

            <br></br>
        </Box>
        );
    }
}

export default Header;