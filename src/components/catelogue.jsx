
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "./base.css";
// import { DunkCard, GooseCard, EssentialsCard, EE, StoneyCard, CommonProjectsCard, ShoesCard, ClothesCard, MonclerCard, GoyardCard, NB550Card, AF1Card, CrocsCard} from './cards';
import * as Cards from './cards'
import EECard from './cards/EECard';
import { Moncler } from '.';
class Catelogue extends Component {

    render() {
        return (
        <Box className="App">
        <Box className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/">"F & G Reps"</a>
            <a className="mobile-header" href="/">"F & G Reps"</a>
            <a className="download" href='./assets' download="orderform.xltx">Download Order Form</a>
            </Box>
            <br/>
            <br/>
            <Box className="App-body">
              <Grid
                container
                rowSpacing={2}
                columnSpacing={1}
                alignItems="stretch"
                sx={{  ml: 1, mr: 1, margin: 0 }}
                justifyContent="left"
              >
                  <Cards.StoneyCard></Cards.StoneyCard>
                  <Cards.DunkCard></Cards.DunkCard>
                  <Cards.GooseCard></Cards.GooseCard>
                  <Cards.EssentialsCard></Cards.EssentialsCard>
                  <Cards.EECard></Cards.EECard>
                  <Cards.CommonProjectsCard></Cards.CommonProjectsCard>
                  <Cards.MonclerCard></Cards.MonclerCard>
                  <Cards.GoyardCard></Cards.GoyardCard>
                  <Cards.NB550Card></Cards.NB550Card>
                  <Cards.AF1Card></Cards.AF1Card>
                  <Cards.CrocsCard></Cards.CrocsCard>

                  

              </Grid>
            </Box>
          </Box>
        );
    }
}

export default Catelogue;