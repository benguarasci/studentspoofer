import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class CrocsCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/crocs'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/e9abef85-97ee-45a9-98a8-2e35a58f57cf_salehe+bembury+Kuwata+Clog+Banner.jpg?auto=compress,format'}
              ></img>
              <h3 className="listing-title">[11] Croc Clogs</h3>
              <p className="listing-attribute">Price: $70</p>
            </a>
        </Grid>
        );
    }
}

export default CrocsCard;