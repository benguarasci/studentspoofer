import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class MonclerCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalog/moncler'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://s3.amazonaws.com/images.nidacaserta.it/A22---MONCLER+GRENOBLE---3B000-12-M1131034.JPG'}
              ></img>
              <h3 className="listing-title">[06] Moncler Touques</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $35</p>
            </a>
        </Grid>
        );
    }
}

export default MonclerCard;