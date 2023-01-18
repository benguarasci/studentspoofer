import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Dunks extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://i.pinimg.com/originals/de/a9/a0/dea9a02938621cf3f311ea72c1d166ae.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[01] Nike Dunk Low</h1>
            <h2 className="verified-product">VERIFIED</h2>

            <h2 className='price'>$120</h2>
            <p className='description'>Can get pretty much any colourway but here are a few that we have been verified. Good quality. True to size</p>   
            <p className='description'>Colors:</p>
            <p className='title'>[0101] | Panda</p>
            <p className='title'>[0102] | White and Green</p>
            <p className='title'>[0103] | North Carolina Blue</p>
            <p className='title'>[0104] | Wine Red</p>
            <p className='title'>[0105] | Navy Blue</p>
            <p className='title'>[0106] | Panda Cashew Flower</p>
            <p className='title'>[0107] | Bone White</p>
            <p className='title'>[0108] | Oxedixed White and Green</p>
            <p className='title'>[0109] | Arctic Fox SB</p>
            {/* <p className='title'>[1010] | Lemon</p> */}
            {/* <p className='title'>[1011] | Turbo Blue</p> */}
            {/* <p className='title'>[1012] | Brown Red Hook SB</p> */}
            </div>
            </div>
            </header>
        );
    }
}

export default Dunks;