import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./base.css";


function SearchLocation(bedrooms) {
  const [listings, setData] = React.useState(null);

  const text = "/get_listings" + bedrooms;

  React.useEffect(() => {
    fetch(text)
      .then((res) => res.json())
      .then((listings) => setData(listings));
  }, []);
}

function Home() {
  const [listings, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/listings/")
      .then((res) => res.json())
      .then((listings) => setData(listings));
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1 className="title">RentSimple</h1>
    // <a className="link-button" href="/about">
    //   About
    // </a>
    // <a
    //   className="link-button"
    //   href="https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link"
    //   target="_blank"
    //   rel="noreferrer"
    // >
    //   Feedback
    // </a>
    //   </header>
    //   <div className="App-body">
    //     {!listings
    //       ? "Loading..."
    //       : listings.map((listing, index) => (
    //           <a
    //             className="listing-card listing-link"
    //             key={index}
    //             href={listing.link}
    //           >
    //             <h3 className="listing-attribute">{listing.title}</h3>
    //             <img
    //               className="listing-image"
    //               alt={listing.title}
    //               src={listing.picture_url}
    //             ></img>
    //             <h5 className="listing-attribute">{listing.posted}</h5>
    //             <h5 className="listing-attribute">Price: ${listing.price}</h5>
    //             <h5 className="listing-attribute">
    //               Bedrooms: {listing.bedrooms}
    //             </h5>
    //             <h5 className="listing-attribute">Size: {listing.size} sqft</h5>
    //             <h5 className="listing-attribute">Location: {listing.city}</h5>
    //             <h5 className="listing-attribute">Source: {listing.source}</h5>
    //           </a>
    //         ))}
    //   </div>
    // </div>

    <Box className="App">
      <Box className="App-header">
        <h1 className="title">RentSimple</h1>
        <a className="link-button" href="/about">
          About
        </a>
        <a
          className="link-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
        >
          Feedback
        </a>
      </Box>
      <Box className="App-body">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={1}
          alignItems="stretch"
          sx={{ mt: 4, ml: 1, mr: 1, margin: 0 }}
        >
          {!listings
            ? "Loading..."
            : listings.map((listing, index) => (
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <a
                      className="listing-card listing-link"
                      key={index}
                      href={listing.link}
                    >
                      <h3 className="listing-title">{listing.title}</h3>
                      <img
                        className="listing-image"
                        alt={listing.title}
                        src={listing.picture_url}
                      ></img>
                      <p className="listing-attribute">{listing.posted}</p>
                      <p className="listing-attribute">
                        Price: ${listing.price}
                      </p>
                      <p className="listing-attribute">
                        Bedrooms: {listing.bedrooms}
                      </p>
                      <p className="listing-attribute">
                        Size: {listing.size} sqft
                      </p>
                      <p className="listing-attribute">
                        Location: {listing.city}
                      </p>
                      <p className="listing-attribute">
                        Source: {listing.source}
                      </p>
                    </a>
                </Grid>
              ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;

// renderTrails = () => {    console.log("TRAILS", this.props.trails.trails)
// if(this.props.trails.trails){
// const trail= this.props.trails.trails.map(t => {
// return(
// <div className="card" style={{width: 30 + 'rem' }}>
// <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
// <div className="card-body">
// <h1 className="card-title">{t.name}</h1>
// <h2 className="card-text">{t.location} </h2>
// <h4 className="card-text">{t.summary} </h4>

// renderTrails = () => {    console.log("TRAILS", this.props.trails.trails)
// if(this.props.trails.trails){
// const trail= this.props.trails.trails.map(t => {
// return(
// <div className="card" style={{width: 30 + 'rem' }}>
// <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
// <div className="card-body">
// <h1 className="card-title">{t.name}</h1>
// <h2 className="card-text">{t.location} </h2>
// <h4 className="card-text">{t.summary} </h4>
