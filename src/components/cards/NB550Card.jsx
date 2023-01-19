import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class NB550Card extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalog/NB550'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://sneakernews.com/wp-content/uploads/2022/02/New-Balance-550-History-016.jpg'}
              ></img>
              <h3 className="listing-title">[08] New Balance 550</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $100</p>
            </a>
        </Grid>
        );
    }
}

export default NB550Card;