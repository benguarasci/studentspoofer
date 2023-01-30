import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class yzyfr extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='http://cdn.shopify.com/s/files/1/0019/7027/4371/products/fm1_yepsmm.jpg?v=1662605088'></img>
            <div className="product-text">
            <h1 className='description'>[17] YZY Slides</h1>
            <h2 className='price'>$50</h2>
            <p className='description'>Good quality yeezy foam runner</p>   
            <p className='description'>Colours:</p>
            <img className='product-image' src='https://si.geilicdn.com/wdseller1472774553-15470000017a8fc9bf080a20e284_1276_956.jpg'></img>
            <p className='title'>[1701] | White</p>
            
            <img className='product-image' src='https://si.geilicdn.com/wdseller1472774553-182d0000017a8fca338e0a21146b_1276_956.jpg'></img>
            <p className='title'>[1702] | Cream</p>
 
            <img className='product-image' src='https://si.geilicdn.com/wdseller1610144534-54cb0000017fb8605e310a2305d0_3026_3024.jpg'></img>
            <p className='title'>[1703] | Coffee</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1610144534-540e0000017fb860a2900a2101ae_3026_3024.jpg'></img>
            <p className='title'>[1704] | Black</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1472774553-1eb50000017a8fd36b890a21146b_1276_956.jpg'></img>
            <p className='title'>[1705] | Marble</p>
            </div>
            </div>
            </header>
        );
    }
}

export default yzyfr;