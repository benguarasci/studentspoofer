import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class TNF extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://media.endclothing.com/media/catalog/product/1/4/14-09-2021_GH_NF0A3JQQLE4_m1_1.jpg'></img>
            <div className="product-text">
            <h1 className='title'>[10] North Face Puffer Vest</h1>
            <h2 className='price'>$100</h2>
            <p className='title'>Looks Legit, will update later</p>   
            <p className='title'>Colors:</p>
            {/* <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01A5NCWo1irTacN0vjm_!!2206590174466-0-cib.jpg'></img> */}
            <p className='title'>[1001] | Black</p>
            {/* <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01FaR4511irTXTfpqEE_!!2206590174466-0-cib.jpg'></img> */}
            <p className='title'>[1002] | Navy</p>
            {/* <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01cWnD2f1irTbuHRKqu_!!2206590174466-0-cib.jpg'></img> */}
            <p className='title'>[1003] | Green </p>
            <p className='title'>[1004] | Blue </p>
            {/* <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01JhSaUn1irTXTfrzK3_!!2206590174466-0-cib.jpg'></img> */}
            <p className='title'>[1005] | Red</p>
            {/* <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN016HD2aB1irTbM1njv5_!!2206590174466-0-cib.jpg'></img> */}
            <p className='title'>[1006] | Purple</p>

            {/* <p className='title'>[1010] | Lemon</p> */}
            {/* <p className='title'>[1011] | Turbo Blue</p> */}
            {/* <p className='title'>[1012] | Brown Red Hook SB</p> */}
            </div>
            </div>
            </header>
        );
    }
}

export default TNF;