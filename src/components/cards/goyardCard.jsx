import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";

class GoyardCard extends Component {

    render() {
        return (
            <Grid xs={12} sm={6} md={4} lg={3}>
            <a
              className="listing-card listing-link"
              href={'/catalog/goyard'}
            >
              <img
                className="listing-image"
                alt={'product'}
                src={'https://images.stockx.com/images/Goyard-Saint-Sulpice-Navy-Blue-V.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&trimcolor=ffffff&updated_at=1637165539'}
              ></img>
              <h3 className="listing-title">[07] Goyard Cardholder</h3>
              <p className="verified">VERIFIED</p>
              <p className="listing-attribute">Price: $25</p>
            </a>
        </Grid>
        );
    }
}

export default GoyardCard;