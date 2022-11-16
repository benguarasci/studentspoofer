import React from "react";
import "./base.css";

function SearchLocation(bedrooms){

  const [listings, setData] = React.useState(null);

  const text = "/get_listings" + bedrooms



  
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
    <div className="App">
      <header className="App-header">
        <h1 class = "title">RentSimple</h1>
        <a class="link-button" href="/about">About</a>
        <a class="link-button" href="https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link">Feedback</a>

        

      </header>
      <body class = "App-body">
        {!listings ? "Loading..." : listings.map((listing, index) => (

            <a class="listing-card listing-link" key={index} href={listing.link}>
                
                <h3 class="listing-attribute">{listing.title}</h3>
                <img class="listing-image" src={listing.picture_url}></img>
                <h5 class="listing-attribute">{listing.posted}</h5>
                <h5 class="listing-attribute">Price: ${listing.price}</h5>
                <h5 class="listing-attribute">Bedrooms: {listing.bedrooms}</h5>
                <h5 class="listing-attribute">Size: {listing.size} sqft</h5>
                <h5 class="listing-attribute">Location: {listing.city}</h5>
                <h5 class="listing-attribute">Source: {listing.source}</h5>
                
            </a>
            
        ))}

      </body>
    </div>
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