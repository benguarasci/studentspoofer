





import React, { Component } from 'react';
import axios from 'axios';

import "./base.css";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      bedrooms: 0,
      location: '',
      budget: 0,
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    console.log("clicked submit");
    e.preventDefault();

    const { name, email, bedrooms, location, budget } = this.state;

    const user = {
        name,
        email, 
        bedrooms, 
        location, 
        budget,
    };

    console.log(user)

  axios.post('http://3.218.175.231:8000/subscribers/add/', user)
      .then(() => console.log('User info gathered'))
      .catch(err => {
        console.error(err);
      });
      
      window.location.reload();
  };

  render() {
    return (
      <div>
        <header className="App-header">
            <h1 className= "title">About</h1>
            <a className="link-button" href="/">Home</a>
            <a className="link-button" href="https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link">Feedback</a>

            <h3 className="title">A work in progress.</h3>
            <div className="about-text">
            <p className="title">You are likely all aware that the current student rental housing market is very competitive at the moment. Since securing a lease is mainly first come first serve I built this small app to help me keep track of new postings accross a few of the main websites such as craigslist, used victoria and facebook. I found it helpful in my search and thought it could be useful to other students. I will be adding features quite regularily any feedback is appreciated.</p>
            <br />
            <p className="title">If you would like personalized email notifications please write your information down here.</p>
            
            </div>
        </header>
        <div className="about-body">
                <br />
                <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <div style={{ width: '30%' }} className="form-group">
                    <input
                        type="text"
                        className="form-input"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                    />
                    </div>
                    <br />
                    <div style={{ width: '30%' }} className="form-group">
                    <input
                        type="text"
                        className="form-input"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleInputChange}
                    />
                    </div>
                    <br />
                    <div style={{ width: '30%' }} className="form-group">
                    <input
                        type="number"
                        className="form-input"
                        name="bedrooms"
                        placeholder="Bedrooms"
                        onChange={this.handleInputChange}
                    />
                    </div>
                    <br />
                    <div style={{ width: '30%' }} className="form-group">
                    <input
                        type="text"
                        className="form-input"
                        name="location"
                        placeholder="Location"
                        onChange={this.handleInputChange}
                    />
                    </div>
                    <br />
                    <div style={{ width: '30%' }} className="form-group">
                    <input
                        type="number"
                        className="form-input"
                        name="budget"
                        placeholder="Budget"
                        onChange={this.handleInputChange}
                    />
                    </div>
                    <br />
                    <div style={{ width: '30%' }}>
                    <button className="btn btn-success form-submit" type="submit">
                        Submit
                    </button>
                    </div>
                </form> 
            </div>
        </div>
            
    </div>
    );
  }
}

export default Create;









// import React from "react";
// import "./base.css";



// function About() {


//   return (
//     <div className="App">
    //   <header className="App-header">
    //     <h1 class = "title">About</h1>
    //     <a className="link-button" href="/">Home</a>
    //     <a className="link-button" href="https://docs.google.com/forms/d/e/1FAIpQLSfWs142mW_jU5E9g73TcCKAiJfX1nPgQNIELfl-pdNMCzbpzg/viewform?usp=sf_link">Feedback</a>

    //     <h3 className="title">A work in progress.</h3>
    //     <div class ="about-text">
    //     <p className="title">You are likely all aware that the current student rental housing market is very competitive at the moment. Since securing a lease is mainly first come first serve I built this small app to help me keep track of new postings accross a few of the main websites such as craigslist, used victoria and facebook. I found it helpful in my search and thought it could be useful to other students. I will be adding features quite regularily any feedback is appreciated.</p>
    //     </div>
    //   </header>
    //   <body class = "App-body">
          

        
    //   </body>
//     </div>
//   );
// }

// export default About;


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