
import React, { Component } from 'react';
import "./base.css";
import Header from './header';

class Home extends Component {

    render() {
        return (
        
            <header className="App-header">
            <Header></Header>
            <div className='feedback-div'>
            <a   href='/schedule'>schedule</a>
            </div>
            </header>
        );
    }
}

export default Home;