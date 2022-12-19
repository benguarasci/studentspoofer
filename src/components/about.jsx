
import React, { Component } from 'react';
import "./base.css";

class About extends Component {

    render() {
        return (
        
            <header className="App-header">
            <div className="nav" id="nav">
            <a className="desktop-header" href="/">RentSimple</a>
            <a className="mobile-header" href="/">RentSimple</a>
            <ul className = "navbar">
                <a className='nav-item' href="/subscribe" id="nav">Subscribe</a>
                <a className='nav-item' href="/about" id="nav">About</a>
                <a className='nav-item' href="https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link" id="nav">Feedback</a>
            </ul>
            </div>
            <br/>
            <br/>
            <h3 className="title">Built for tenents.</h3>
            <div className="about-text">
            
            <p className="title">Rentsimple was designed to be an intuitive tool to help all users find a new rental home.</p>
            
            </div>
            </header>
        );
    }
}

export default About;