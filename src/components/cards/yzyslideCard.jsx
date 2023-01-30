import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class yzyslideCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/yzyslide'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://si.geilicdn.com/wdseller1610144534-5b470000017ef719a04a0a22e17f_720_720.jpg'}
              ></img>
              <h3 className="listing-title">[16] YZY Slides</h3>
              <p className="listing-attribute">Price: $40</p>
            </a>
        </Grid>
        );
    }
}

export default yzyslideCard;