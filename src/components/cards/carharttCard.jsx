
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class CarharttCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/carhartt'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://logoeps.com/wp-content/uploads/2012/05/carhartt-logo-vector-01.png'}
              ></img>
              <h3 className="listing-title">Carhartt</h3>
              {/* <p className="listing-attribute">Price: $120</p> */}
            </a>
        </Grid>
        );
    }
}

export default CarharttCard;