
import React, { Component } from 'react';
import "./base.css";
import Header from './header';

class Home extends Component {

    render() {
        return (
        
            <header className="App-header">
            <Header></Header>
            <div className='feedback-div'>
            <a   href='/schedule/ben'>Ben</a>
            <br></br>
            <br></br>
            <br></br>
            <a   href='/schedule/jack'>Jack</a>
            <br></br>
            <br></br>
            <br></br>
            <a   href='/schedule/camus'>Camus</a>
            <br></br>
            <br></br>
            <br></br>
            <a   href='/schedule/graham'>Graham</a>
            {/* <a   href='/schedule'>schedule</a> */}

            </div>
            </header>
        );
    }
}

export default Home;