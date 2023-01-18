import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class AF1 extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://si.geilicdn.com/open1352609626-1340698444-6a9300000183790b83e20a2008af_2560_2560.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[09] Air Force 1</h1>
            
            <h2 className='price'>$50</h2>
            <p className='description'>Mid quality. Only $50. True to size</p>   
            <p className='description'>[0901] | All White</p>   

            </div>
            </div>
            </header>
        );
    }
}

export default AF1;