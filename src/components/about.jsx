
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
            <p className='title'>RentSimple consolidates and provides filtering options on postings from all common platforms such as craigslist and Facebook marketplace. This allows users to see all relevant rental listings from one website instead of having to check many different sites daily.</p>
            <p className="title">In the summer of 2021, we were desperately looking for rental housing in a very competitive  market that had less than 5% vacancy. We soon discovered that if we didnt respond immediately to new postings, we would seldomly receive a response from the property manager. This experience was very stressful and the search required us to be constantly on our laptops so we could quickly apply to anything that fit our budget. We built this application simply as a tool for ourselves to save time and stress during our rental search. Within a week of using it, we ended up securing an amazing apartment. </p>   
            <p className='title'>This is a work in progress and will be receiving frequent updates based on user feedback. If you have any thoughts, please fill out the form below. We appreciate any thoughts you might have.</p>
            {/* <p className='title'>- Ben Guarasci & Jack Campbell</p> */}
            </div>
            <div className='feedback-div'>
            <a className='feedback'  href='https://docs.google.com/forms/d/e/1FAIpQLSeV5wToosjrxzQ258yIgjARdefV9B4TCmH0nxXWqrp7daRJ3g/viewform?usp=sf_link'>Feedback</a>
            </div>
            </header>
        );
    }
}

export default About;