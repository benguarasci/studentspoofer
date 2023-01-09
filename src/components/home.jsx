
import React, { Component } from 'react';
import "./base.css";

class Home extends Component {

    render() {
        return (
        
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/">"F & G Reps"</a>
            <a className="mobile-header" href="/">"F & G Reps"</a>
            <div className="about-text">
            <p className='title'>RentSimple consolidates and provides filtering options on postings from all common platforms such as craigslist and Facebook marketplace. This allows users to see all relevant rental listings from one website instead of having to check many different sites daily.</p>
            <p className="title">In the summer of 2021, we were desperately looking for rental housing in a very competitive  market that had less than 5% vacancy. We soon discovered that if we didnt respond immediately to new postings, we would seldomly receive a response from the property manager. This experience was very stressful and the search required us to be constantly on our laptops so we could quickly apply to anything that fit our budget. We built this application simply as a tool for ourselves to save time and stress during our rental search. Within a week of using it, we ended up securing an amazing apartment. </p>   
            <p className='title'>This is a work in progress and will be receiving frequent updates based on user feedback. If you have any thoughts, please fill out the form below. We appreciate any thoughts you might have.</p>

            </div>
            <div className='feedback-div'>
            <a className='feedback'  href='/catelogue'>Catelogue</a>
            </div>
            </header>
        );
    }
}

export default Home;