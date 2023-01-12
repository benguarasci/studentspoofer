import React, { Component } from 'react';
import "./base.css";

class AF1 extends Component {

    render() {
        return (
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <a className="download" href='./assets' download="orderform.xltx">Download Order Form</a>

            <div className='product-container'>
            <img className='product-image' src='https://si.geilicdn.com/open1352609626-1340698444-6a9300000183790b83e20a2008af_2560_2560.jpg'></img>
            <div className="product-text">
            <h1 className='title'>[09] Air Force 1</h1>
            <h2 className='price'>$50</h2>
            <p className='title'>Mid quality. Only $50. True to size</p>   
            <p className='title'>[0901] | All White</p>   

            </div>
            </div>
            </header>
        );
    }
}

export default AF1;