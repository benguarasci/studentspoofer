import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class ShoesCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalogue/shoes'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://cdn.vox-cdn.com/thumbor/qqY4h3KXIR-wjaurGcKDlNoYpmY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19913546/13_shoe_organizer_lede.w700.h700.2x.jpg'}
              ></img>
              <h3 className="listing-title">Misc Shoes</h3>
              {/* <p className="listing-attribute">Price: $120</p> */}
            </a>
        </Grid>
        );
    }
}

export default ShoesCard;