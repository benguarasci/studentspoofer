import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class AF1Card extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/AF1'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://si.geilicdn.com/open1352609626-1340698444-6a9300000183790b83e20a2008af_2560_2560.jpg'}
              ></img>
              <h3 className="listing-title">[09] Air Force 1</h3>
              <p className="listing-attribute">Price: $50</p>
            </a>
        </Grid>
        );
    }
}

export default AF1Card;