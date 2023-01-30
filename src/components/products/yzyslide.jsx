import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class yzyslide extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://si.geilicdn.com/wdseller1610144534-5b470000017ef719a04a0a22e17f_720_720.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[16] YZY Slides</h1>
            <h2 className='price'>$40</h2>
            <p className='description'>Good quality yeezy slides</p>   
            <p className='description'>Colours:</p>
            <img className='product-image' src='https://si.geilicdn.com/pcitem1472774553-73fc000001723d4280140a21c2a8_1440_1080.jpg'></img>
            <p className='title'>[1601] | Coffee</p>
            
            <img className='product-image' src='https://si.geilicdn.com/wdseller1610144534-4a690000017fef3cb3da0a23051f_3026_3024.jpg'></img>
            <p className='title'>[1602] | Cream</p>
 
            <img className='product-image' src='https://si.geilicdn.com/wdseller1472774553-71820000017a29522a400a217216_1276_956.jpg'></img>
            <p className='title'>[1603] | Black</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1472774553-6dda0000017a29529c050a20b7b9_1276_956.jpg'></img>
            <p className='title'>[1604] | Dark Brown</p>

            <img className='product-image' src='https://si.geilicdn.com/pcitem1472774553-0921000001723d4329f50a21348d_1440_1080.jpg'></img>
            <p className='title'>[1605] | Bone</p>

            <img className='product-image' src='https://si.geilicdn.com/pcitem1472774553-75a2000001723d43293c0a21c2a8_1440_1080.jpg'></img>
            <p className='title'>[1606] | Mustard</p>
            </div>
            </div>
            </header>
        );
    }
}

export default yzyslide;