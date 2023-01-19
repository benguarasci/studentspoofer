
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class TNFCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalog/tnf'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://media.endclothing.com/media/catalog/product/1/4/14-09-2021_GH_NF0A3JQQLE4_m1_1.jpg'}
              ></img>
              <h3 className="listing-title">[10] North Face Puffer Vest</h3>
              <p className="listing-attribute">Price: $100</p>
            </a>
        </Grid>
        );
    }
}

export default TNFCard;