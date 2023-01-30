import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Dunks extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://i.pinimg.com/originals/de/a9/a0/dea9a02938621cf3f311ea72c1d166ae.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[01] Nike Dunk Low</h1>
            <h2 className="verified-product">VERIFIED</h2>

            <h2 className='price'>$120</h2>
            <p className='description'>Can get pretty much any colourway but here are a few that we have been verified. Good quality. True to size</p>   
            <p className='description'>Colors:</p>
            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-23570000017df46437f50a2104c1_870_868.jpg'></img>
            <p className='title'>[0101] | Panda</p>
            
            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-25f40000017df464c50a0a20e2c5_870_868.jpg'></img>
            <p className='title'>[0102] | White and Green</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-243b0000017df465273a0a207569_870_868.jpg'></img>
            <p className='title'>[0103] | North Carolina Blue</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller901637383293-43960000017fe6d657990a20e2c5_769_767.jpg'></img>
            <p className='title'>[0104] | Wine Red</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-4a910000017f50303c600a2104c1_1122_1122.jpg'></img>
            <p className='title'>[0105] | Navy Blue</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-2f9e0000017fb420cea80a2102d0_1536_1534.jpg'></img>
            <p className='title'>[0106] | Panda Cashew Flower</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller901637383293-2fca0000017fe6d6b3910a22e48d_1537_1534.jpg'></img>
            <p className='title'>[0107] | Bone White</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-5bca000001807712a4260a2104c1_1536_1534.jpg'></img>
            <p className='title'>[0108] | Oxedixed White and Green</p>

            <img className='product-image' src='https://si.geilicdn.com/wdseller1372944448-26460000017df4644caf0a20e672_870_868.jpg'></img>
            <p className='title'>[0109] | Arctic Fox SB</p>
            {/* <p className='title'>[1010] | Lemon</p> */}
            {/* <p className='title'>[1011] | Turbo Blue</p> */}
            {/* <p className='title'>[1012] | Brown Red Hook SB</p> */}
            </div>
            </div>
            </header>
        );
    }
}

export default Dunks;