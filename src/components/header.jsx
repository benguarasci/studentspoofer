
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "./base.css";

class Header extends Component {

    render() {
        return (
        <Box className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <a className="download" target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSePvn0XeQvHsB3XJAKwr-Clu_pY58pmfYxjQq4EPWhkGDolnA/viewform?pli=1' >Order Form</a>
        </Box>
        );
    }
}

export default Header;