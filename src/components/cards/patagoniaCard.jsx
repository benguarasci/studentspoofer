import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class patagoniaCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catelogue/patagonia'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwb5971a53/images/hi-res/23056_NAT.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f5f5f5'}
              ></img>
              <h3 className="listing-title">[20] Patagonia Fleece</h3>
              <p className="listing-attribute">Price: $90</p>
            </a>
        </Grid>
        );
    }
}

export default patagoniaCard;