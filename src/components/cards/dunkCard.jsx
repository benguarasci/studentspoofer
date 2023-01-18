
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class DunkCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/dunks'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://i.pinimg.com/originals/de/a9/a0/dea9a02938621cf3f311ea72c1d166ae.jpg'}
              ></img>
              <h3 className="listing-title">[01] Nike Dunk Low</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $120</p>

            </a>
        </Grid>
        );
    }
}

export default DunkCard;