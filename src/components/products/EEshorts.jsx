import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class EE extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://img.alicdn.com/imgextra/i2/652965212/O1CN01njoaqu1oN8zmMlxxZ_!!652965212.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[14] Eric Emanuel shorts</h1>
            <h2 className="verified-product">VERIFIED</h2>

            <h2 className='price'>$40</h2>
            <p className='description'>Good quality. True to size</p>   
            <p className='description'>Colors:</p>
            <p className='title'>[1401] | White - Brown Label</p>
            <p className='title'>[1402] | Black - Red label</p>
            <p className='title'>[1403] | Black - Grey label</p>
            <p className='title'>[1404] | Green - Green label</p>
            <p className='title'>[1405] | Gray - Black label</p>
            <p className='title'>[1406] | Gray - Red labelr</p>
            <p className='title'>[1407] | Sky Blue</p>
            <p className='title'>[1408] | Dark Green - Red label</p>
            <p className='title'>[1409] | Red - Purple label</p>

            <p className='title'>[1410] | Red - Red label</p>
            <p className='title'>[1411] | Black - Black label</p>
            <p className='title'>[1412] | Purple - Yellow label</p>
            <p className='title'>[1413] | Dark Blue - Red label</p>
            <p className='title'>[1414] | Dark Blue - Yellow labelr</p>
            <p className='title'>[1415] | Gold - Green label</p>
            <p className='title'>[1416] | Pink - Red label</p>
            <p className='title'>[1417] | Pink - Green label</p>

            <p className='title'>[1418] | Sky Blue - Orange label</p>
            <p className='title'>[1419] | Sky Blue - Red label</p>
            <p className='title'>[1420] | Navy Blue - Orange label</p>
            <p className='title'>[1421] | Navy Blue - Purple label</p>
  


            </div>
            </div>
            </header>
        );
    }
}

export default EE;