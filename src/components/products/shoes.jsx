import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Shoes extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://cdn.vox-cdn.com/thumbor/qqY4h3KXIR-wjaurGcKDlNoYpmY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19913546/13_shoe_organizer_lede.w700.h700.2x.jpg'></img>
            <div className="product-text">
            <h1 className='description'>Misc Shoes</h1>
            {/* <h2 className='price'>$ will varry</h2> */}
            <p className='description'>Hella shoes in this link</p> 
            
            <a target="_blank" rel="noopener noreferrer" href="https://168shops.x.yupoo.com/albums">Link</a>
            <p>Price is going to varry depending on the item, we can give you a projected price upon ordering</p>
            </div>
            </div>
            </header>
        );
    }
}

export default Shoes;