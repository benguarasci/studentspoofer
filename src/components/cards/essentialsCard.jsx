
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class EssentialsCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalog/essentials'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://img.alicdn.com/imgextra/i2/1090806015/O1CN01aPuxbq1uIv5B3jEK3_!!1090806015.jpg'}
              ></img>
              <h3 className="listing-title">[03] Essentials FOG Hoodie</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $50</p>
            </a>
        </Grid>
        );
    }
}

export default EssentialsCard;