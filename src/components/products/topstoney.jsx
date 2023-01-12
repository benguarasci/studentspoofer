import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Topstoney extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://i.pinimg.com/originals/06/86/17/06861769ed32394ed44bbfd07dfc42e1.jpg'></img>
            <div className="product-text">
            <h1 className='title'>Stone Island</h1>
            <p className='title'>Can get anything from this link.</p>   
            <a target="_blank" rel="noopener noreferrer" href='https://topstoney.x.yupoo.com'>link</a>

            </div>
            </div>
            </header>
        );
    }
}

export default Topstoney;