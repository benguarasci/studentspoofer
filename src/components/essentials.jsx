import React, { Component } from 'react';
import "./base.css";

class Essentials extends Component {

    render() {
        return (
            <header className="App-header">
            <br></br>
            <br></br>
            <a className="desktop-header" href="/catelogue">"F & G Reps"</a>
            <a className="mobile-header" href="/catelogue">"F & G Reps"</a>
            <div className='product-container'>
            {/* <img className='product-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nT0AnEqXNiW6n0cL8tD_ETu7DgOuto3Ehg&usqp=CAU'></img> */}
            <div className="product-text">
            <h1 className='title'>[03] Essentials FOG Hoodie</h1>
            <h2 className='price'>$50</h2>
            <p className='title'>Good quality. True to size</p>   
            <p className='title'>Colors:</p>
            
            <img className='product-image' src='https://img.alicdn.com/imgextra/i2/1090806015/O1CN01aPuxbq1uIv5B3jEK3_!!1090806015.jpg'></img>
            <p className='title'>[0301] | White</p>
            
            <img className='product-image' src='https://img.alicdn.com/imgextra/i4/1090806015/O1CN0115GEXb1uIv7cIGqSZ_!!1090806015.jpg'></img>
            <p className='title'>[0302] | Black</p>
 
            <img className='product-image' src='https://img.alicdn.com/imgextra/i2/1090806015/O1CN01z716Za1uIv5GcUAYU_!!1090806015.jpg'></img>
            <p className='title'>[0303] | Cream</p>

            <img className='product-image' src='https://img.alicdn.com/imgextra/i4/1090806015/O1CN01d1mXVi1uIv7kTPaOA_!!1090806015.png'></img>
            <p className='title'>[0304] | Grey</p>

            <img className='product-image' src='https://img.alicdn.com/imgextra/i2/1090806015/O1CN01Wue1NC1uIv5BymkJ2_!!1090806015.jpg'></img>
            <p className='title'>[0305] | Beige</p>

            </div>
            </div>
            </header>
        );
    }
}

export default Essentials;