import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Crocs extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/e9abef85-97ee-45a9-98a8-2e35a58f57cf_salehe+bembury+Kuwata+Clog+Banner.jpg?auto=compress,format'></img>
            <div className="product-text">
            <h1 className='description'>[11] Croc Clogs</h1>
            <h2 className='price'>$70</h2>
            <p className='description'>Can get pretty much any colourway but here are a few that we have been verified. Good quality. True to size</p>   
            <p className='description'>Colors:</p>
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN017ySkGV1hfjnkZl7oe_!!3823534305-0-cib.jpg'></img>
            <p className='title'>[1101] | Green</p>
            
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01lpSDIy1hfjpWdaRtd_!!3823534305-0-cib.jpg'></img>
            <p className='title'>[1102] | Fog Purple</p>
 
            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01s128K01hfjnzKZNRQ_!!3823534305-0-cib.jpg'></img>
            <p className='title'>[1103] | Cream</p>

            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01enKM051hfjo9or8Vj_!!3823534305-0-cib.jpg'></img>
            <p className='title'>[1104] | Khaki</p>

            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01yh4iMR1hfjoWnNm8W_!!3823534305-0-cib.jpg'></img>
            <p className='title'>[1105] | White</p>

            <img className='product-image' src='https://cbu01.alicdn.com/img/ibank/O1CN01ILH5sq1hfjowut6jg_!!3823534305-0-cib.jpg'></img>
            <p className='title'>[1106] | Black</p>

            </div>
            </div>
            </header>
        );
    }
}

export default Crocs;