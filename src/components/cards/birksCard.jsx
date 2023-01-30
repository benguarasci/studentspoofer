import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class birksCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/birks'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://gw.alicdn.com/bao/uploaded/i1/3027414106/O1CN01phB4pV1gCazqjz8DA_!!3027414106.jpg'}
              ></img>
              <h3 className="listing-title">[19] Birkenstocks</h3>
              <p className="listing-attribute">Price: $70</p>
            </a>
        </Grid>
        );
    }
}

export default birksCard;