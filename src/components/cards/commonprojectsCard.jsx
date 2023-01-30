
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class CommonProjectsCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/commonprojects'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://media.gq.com/photos/57a9edb8251c1fea0b079a1c/master/pass/common-projects-multi-color.jpg'}
              ></img>
              <h3 className="listing-title">[05] Common Project Boots</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $150</p>
            </a>
        </Grid>
        );
    }
}

export default CommonProjectsCard;