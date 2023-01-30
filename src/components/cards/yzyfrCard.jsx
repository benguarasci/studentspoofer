import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class yzyfrCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/yzyfr'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'http://cdn.shopify.com/s/files/1/0019/7027/4371/products/fm1_yepsmm.jpg?v=1662605088'}
              ></img>
              <h3 className="listing-title">[17] YZY Foam Runner</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $50</p>
            </a>
        </Grid>
        );
    }
}

export default yzyfrCard;