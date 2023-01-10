
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "./base.css";
import { DunkCard, GooseCard, EssentialsCard, EE, StoneyCard, CommonProjectsCard, ShoesCard } from './cards';

class Catelogue extends Component {

    render() {
        return (
        <Box className="App">
        <Box className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/">"F & G Reps"</a>
            <a className="mobile-header" href="/">"F & G Reps"</a>
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
                  <StoneyCard></StoneyCard>
                  <ShoesCard></ShoesCard>
                  <DunkCard></DunkCard>
                  <GooseCard></GooseCard>
                  <EssentialsCard></EssentialsCard>
                  <EE></EE>
                  <CommonProjectsCard></CommonProjectsCard>

                  

              </Grid>
            </Box>
          </Box>
        );
    }
}

export default Catelogue;