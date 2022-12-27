
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
            </ul>
            </div>
            <br/>
            <br/>
            <h3 className="title">Built for tenents.</h3>
            <div className="about-text">
            
            <p className="title">Rentsimple was designed to be an intuitive tool to help all users find a new rental home.</p>
            <p className='title'>In the summer of 2021, we were desperately looking for housing in the </p>
            <p className='title'>RentSimple consolodates and provides filtering options on postings from all common platforms such as craigslist and facebook marketplace. This allows users to see all relevent rental listings from one website instead of having to check many different sites daily.</p>
            <p className='title'>This is a work in progress and will be recieving frequent updates based on user feedback. If you have any thoughts please fill out the form below. We appreciate any thoughts you might have.</p>
            </div>
            <div className='feedback-div'>
            <a className='feedback'  href='https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link'>Feedback</a>
            </div>
            </header>
        );
    }
}

export default About;