
import React, { Component } from 'react';
import "./base.css";
import Header from './header';

class Home extends Component {

    render() {
        return (
        
            <header className="App-header">
            <Header></Header>
            <div className="about-text">
            <p className='title'>Disclaimer!! Shits from china so there are no returns.</p>
<p>To order anything, click the order form above, and paste the ID number, and/or the link with your prefered size in to the designated area.  </p>

            </div>
            <div className='feedback-div'>
            <a className='feedback'  href='/catelogue'>Catelogue</a>
            </div>
            </header>
        );
    }
}

export default Home;