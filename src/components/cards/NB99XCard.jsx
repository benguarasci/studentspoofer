
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class NB99XCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/NB99X'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://media.gq.com/photos/5cae87abbbeea90d15ad94e8/4:3/w_2663,h_1997,c_limit/New-Balance-13806.jpg'}
              ></img>
              <h3 className="listing-title">[12] New Balance 99X Lineup</h3>
              <p className="listing-attribute">Price: $150</p>
            </a>
        </Grid>
        );
    }
}

export default NB99XCard;