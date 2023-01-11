
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
            <a className="download" href='./assets' download="orderform.xltx">Download Order Form</a>

            <div className="about-text">
            <p className='title'>Disclaimer!! Shits from china so there are no returns.</p>


            </div>
            <div className='feedback-div'>
            <a className='feedback'  href='/catelogue'>Catelogue</a>
            </div>
            </header>
        );
    }
}

export default Home;