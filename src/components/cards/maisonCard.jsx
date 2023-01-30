import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class MaisonCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/maison'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://img.mytheresa.com/1088/1088/66/jpeg/catalogue/product/04/P00364280.jpg'}
              ></img>
              <h3 className="listing-title">[15] Maison Margiela's</h3>
              {/* <p className="verified">VERIFIED</p> */}
              <p className="listing-attribute">Price: $150</p>
            </a>
        </Grid>
        );
    }
}

export default MaisonCard;