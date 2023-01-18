import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class TeesCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/tees'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://media.gq.com/photos/62449bb9c7d2b6b7cae2f8a5/3:2/w_1686,h_1124,c_limit/vintage-tees.jpg'}
              ></img>
              <h3 className="listing-title">[13] Tees</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $30</p>
            </a>
        </Grid>
        );
    }
}

export default TeesCard;