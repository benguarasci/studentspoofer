import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class CrocsCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/cplow'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://img.alicdn.com/imgextra/i4/2763182845/O1CN01WPqGbt1Wt3Zu0a0Ma_!!2763182845.jpg'}
              ></img>
              <h3 className="listing-title">[04] Common Project Achillies Low</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $150</p>
            </a>
        </Grid>
        );
    }
}

export default CrocsCard;