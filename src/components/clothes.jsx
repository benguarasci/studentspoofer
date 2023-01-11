import React, { Component } from 'react';
import "./base.css";

class Clothes extends Component {

    render() {
        return (
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <a className="download" href='./assets' download="orderform.xltx">Download Order Form</a>

            <div className='product-container'>
            <img className='product-image' src='https://www.newidea.com.au/media/73491/thailand-1997.jpg?width=720&center=0.0,0.0'></img>
            <div className="product-text">
            <h1 className='title'>Misc Clothes</h1>
            <h2 className='price'>$TBD</h2>
            <p className='title'>Can get pretty much anything from this link</p> 
            <a target="_blank" rel="noopener noreferrer" href="https://o832club.x.yupoo.com/albums">Link</a>
            </div>
            </div>
            </header>
        );
    }
}

export default Clothes;