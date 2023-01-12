import React, { Component } from 'react';
import "./base.css";

class Shoes extends Component {

    render() {
        return (
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <a className="download" href='./assets' download="orderform.xltx">Download Order Form</a>

            <div className='product-container'>
            <img className='product-image' src='https://cdn.vox-cdn.com/thumbor/qqY4h3KXIR-wjaurGcKDlNoYpmY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19913546/13_shoe_organizer_lede.w700.h700.2x.jpg'></img>
            <div className="product-text">
            <h1 className='title'>Misc Shoes</h1>
            <h2 className='price'>$TBD</h2>
            <p className='title'>Can get pretty much anything from this link</p> 
            <a target="_blank" rel="noopener noreferrer" href="https://cnfactory-top1.x.yupoo.com/albums">Link</a>
            </div>
            </div>
            </header>
        );
    }
}

export default Shoes;