import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Clothes extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://www.newidea.com.au/media/73491/thailand-1997.jpg?width=720&center=0.0,0.0'></img>
            <div className="product-text">
            <h1 className='description'>Misc Clothes</h1>
            {/* <h2 className='price'>$TBD</h2> */}
            <p className='description'>Can get most of the items on this link</p> 
            <p>
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://husky-reps.x.yupoo.com/albums">Link</a>
             {/* <p className='title'></p>   */}
             <p>Price is going to varry depending on the item, we can give you a projected price upon ordering</p>
            <br></br>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://chaosmade.x.yupoo.com/albums">Link with more shit</a> */}
            </div>
            </div>
            </header>
        );
    }
}

export default Clothes;