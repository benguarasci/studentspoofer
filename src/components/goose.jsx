import React, { Component } from 'react';
import "./base.css";

class Goose extends Component {

    render() {
        return (
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <div className='product-container'>
            <img className='product-image' src='https://cdn.shopify.com/s/files/1/1230/9376/products/CGO-4154M_7E_7EStudio_20Side_20Black.jpg?v=1662097432'></img>
            <div className="product-text">
            <h1 className='title'>[02] Canada Goose Vest</h1>
            <h2 className='price'>$100</h2>
            <p className='title'>Can get pretty much any colourway but here are a few that we have been verified.</p>   
            <p className='title'>Colors:</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01A5NCWo1irTacN0vjm_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[1001] | Black</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01FaR4511irTXTfpqEE_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[1002] | White</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01cWnD2f1irTbuHRKqu_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[1001] | Grey (red label)</p>
            <p className='title'>[1001] | Grey (black label)</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01JhSaUn1irTXTfrzK3_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[1004] | Navy Blue</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN016HD2aB1irTbM1njv5_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[1005] | Blue</p>

            {/* <p className='title'>[1010] | Lemon</p> */}
            {/* <p className='title'>[1011] | Turbo Blue</p> */}
            {/* <p className='title'>[1012] | Brown Red Hook SB</p> */}
            </div>
            </div>
            </header>
        );
    }
}

export default Goose;