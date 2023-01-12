
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class StoneyCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/topstoney'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://i.pinimg.com/originals/06/86/17/06861769ed32394ed44bbfd07dfc42e1.jpg'}
              ></img>
              <h3 className="listing-title">Stone Island</h3>
              {/* <p className="listing-attribute">Price: $120</p> */}
            </a>
        </Grid>
        );
    }
}

export default StoneyCard;