
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class EECard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/EE'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://img.alicdn.com/imgextra/i2/652965212/O1CN01njoaqu1oN8zmMlxxZ_!!652965212.jpg'}
              ></img>
              <h3 className="listing-title">[14] Eric Emanuel Shorts</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $40</p>
            </a>
        </Grid>
        );
    }
}

export default EECard;