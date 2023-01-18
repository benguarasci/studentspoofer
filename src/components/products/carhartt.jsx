import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Carhartt extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://logoeps.com/wp-content/uploads/2012/05/carhartt-logo-vector-01.png'></img>
            <div className="product-text">
            <h1 className='description'>Hella Carhartt + more</h1>
            <p className='description'>Lots of cool stuff in this link.</p>   
            <a target="_blank" rel="noopener noreferrer" href='https://husky-reps.x.yupoo.com/categories/3298563'>link</a>

            </div>
            </div>
            </header>
        );
    }
}

export default Carhartt;