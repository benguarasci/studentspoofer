
import React, { Component } from 'react';
import "./base.css";
import Header from './header';

class Home extends Component {

    render() {
        return (
        
            <header className="App-header">
            <Header></Header>
            <div className="about-text">
            <p className='title'>Disclaimer!! Everythings from china so there are no returns.</p>
            <p>Complete the form above to make an order. Paste the ID number or the link with your prefered size and colour into the designated area.</p>
            </div>
            <div className='feedback-div'>
            <a className='feedback'  href='/catelogue'>Catelogue</a>
            </div>
            </header>
        );
    }
}

export default Home;