import React, { Component } from 'react';
import "./base.css";

class Dunks extends Component {

    render() {
        return (
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <div className='product-container'>
            <img className='product-image' src='https://i.pinimg.com/originals/de/a9/a0/dea9a02938621cf3f311ea72c1d166ae.jpg'></img>
            <div className="product-text">
            <h1 className='title'>[01] Nike Dunk Low</h1>
            <h2 className='price'>$120</h2>
            <p className='title'>Can get pretty much any colourway but here are a few that we have been verified.</p>   
            <p className='title'>Colors:</p>
            <p className='title'>[1001] | Panda</p>
            <p className='title'>[1002] | White and Green</p>
            <p className='title'>[1003] | North Carolina Blue</p>
            <p className='title'>[1004] | Wine Red</p>
            <p className='title'>[1005] | Navy Blue</p>
            <p className='title'>[1006] | Panda Cashew Flower</p>
            <p className='title'>[1007] | Bone White</p>
            <p className='title'>[1008] | Oxedixed White and Green</p>
            <p className='title'>[1009] | Arctic Fox SB</p>
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