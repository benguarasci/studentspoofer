
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "./base.css";
// import { DunkCard, GooseCard, EssentialsCard, EE, StoneyCard, CommonProjectsCard, ShoesCard, ClothesCard, MonclerCard, GoyardCard, NB550Card, AF1Card, CrocsCard} from './cards';
import * as Cards from './cards'
import Header from './header';
import NB550 from './products/NB550';
import TeesCard from './cards/teesCard';


class catalogue extends Component {

    render() {
        return (
        <Box className="App">
          <Header></Header>
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
                  <Cards.ClothesCard></Cards.ClothesCard>
                  <Cards.ShoesCard></Cards.ShoesCard>
                  <Cards.DunkCard></Cards.DunkCard>
                  <Cards.GooseCard></Cards.GooseCard>
                  <Cards.EssentialsCard></Cards.EssentialsCard>
                  <Cards.CPLowCard></Cards.CPLowCard>
                  <Cards.CommonProjectsCard></Cards.CommonProjectsCard>
                  <Cards.MonclerCard></Cards.MonclerCard>
                  <Cards.GoyardCard></Cards.GoyardCard>
                  <Cards.NB550Card></Cards.NB550Card>
                  <Cards.AF1Card></Cards.AF1Card>
                  <Cards.TNFCard></Cards.TNFCard>
                  <Cards.CrocsCard></Cards.CrocsCard>
                  <Cards.NB99XCard></Cards.NB99XCard>
                  <Cards.TeesCard></Cards.TeesCard>
                  <Cards.EECard></Cards.EECard>
                  <Cards.MaisonCard></Cards.MaisonCard>
                  <Cards.CPLowCard></Cards.CPLowCard>
                  <Cards.yzyslideCard></Cards.yzyslideCard>
                  <Cards.yzyfrCard></Cards.yzyfrCard>
                  <Cards.dimeCard></Cards.dimeCard>
                  <Cards.birksCard></Cards.birksCard>
                  <Cards.patagoniaCard></Cards.patagoniaCard>

              </Grid>
            </Box>
          </Box>
        );
    }
}

export default catalogue;