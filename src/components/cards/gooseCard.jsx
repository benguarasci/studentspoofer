
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class GooseCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalog/goose'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://cdn.shopify.com/s/files/1/1230/9376/products/CGO-4154M_7E_7EStudio_20Side_20Black.jpg?v=1662097432'}
              ></img>
              <h3 className="listing-title">[02] Canada Goose Vest</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $100</p>
            </a>
        </Grid>
        );
    }
}

export default GooseCard;