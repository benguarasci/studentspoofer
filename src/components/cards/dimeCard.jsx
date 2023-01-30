import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class DimeCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/dime'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://cdn.shoplightspeed.com/shops/636502/files/40034451/image.jpg'}
              ></img>
              <h3 className="listing-title">[18] Dime Jeans</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $80</p>
            </a>
        </Grid>
        );
    }
}

export default DimeCard;