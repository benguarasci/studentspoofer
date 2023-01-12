import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class MonclerCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/moncler'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurZg2o6ezMQAr3md3oUJow7TTBdenhmN2CxUpHu5i4KqwIxRYlW2xC5rsCZPYJhHrfAc&usqp=CAU'}
              ></img>
              <h3 className="listing-title">[06] Moncler Touques</h3>
              <p className="listing-attribute">Price: $35</p>
            </a>
        </Grid>
        );
    }
}

export default MonclerCard;