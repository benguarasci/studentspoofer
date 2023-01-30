import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class dime extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://cdn.shoplightspeed.com/shops/636502/files/40034451/image.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[18] Dime Jeans</h1>
            <h2 className='price'>$80</h2>
            <p className='description'>Great quality - size up</p>   
            <p className='description'>[1801] | Blue</p>   

            </div>
            </div>
            </header>
        );
    }
}

export default dime;