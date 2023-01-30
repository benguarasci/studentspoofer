import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class ClothesCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/clothes'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://www.newidea.com.au/media/73491/thailand-1997.jpg?width=720&center=0.0,0.0'}
              ></img>
              <h3 className="listing-title">Misc Clothes</h3>
              {/* <p className="listing-attribute">Price: $120</p> */}
            </a>
        </Grid>
        );
    }
}

export default ClothesCard;