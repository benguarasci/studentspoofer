import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class GoyardCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/goyard'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://a.1stdibscdn.com/archivesE/upload/1722654/v_1170172/IMG_7838_org_s.jpg'}
              ></img>
              <h3 className="listing-title">[07] Goyard Cardholder</h3>
              <p className="listing-attribute">Price: $25</p>
            </a>
        </Grid>
        );
    }
}

export default GoyardCard;