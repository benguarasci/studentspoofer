import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Goose extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://cdn.shopify.com/s/files/1/1230/9376/products/CGO-4154M_7E_7EStudio_20Side_20Black.jpg?v=1662097432'></img>
            <div className="product-text">
            <h1 className='title'>[02] Canada Goose Vest</h1>
            <h2 className='price'>$100</h2>
            <p className='title'>Basically legit. Size up</p>   
            <p className='title'>Colors:</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01A5NCWo1irTacN0vjm_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[0201] | Black</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01FaR4511irTXTfpqEE_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[0202] | White</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01cWnD2f1irTbuHRKqu_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[0203] | Grey (red label)</p>
            <p className='title'>[0204] | Grey (black label)</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01JhSaUn1irTXTfrzK3_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[0205] | Navy Blue</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN016HD2aB1irTbM1njv5_!!2206590174466-0-cib.jpg'></img>
            <p className='title'>[0206] | Blue</p>

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