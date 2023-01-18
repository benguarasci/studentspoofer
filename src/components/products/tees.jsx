import React, { Component } from 'react';
import "../base.css";
import Header from '../header';

class Tees extends Component {

    render() {
        return (
            <header className="App-header">
            <Header></Header>
            <div className='product-container'>
            <img className='product-image' src='https://media.gq.com/photos/62449bb9c7d2b6b7cae2f8a5/3:2/w_1686,h_1124,c_limit/vintage-tees.jpg'></img>
            <div className="product-text">
            <h1 className='description'>[13] Tees</h1>
            <h2 className="verified-product">VERIFIED</h2>

            <h2 className='price'>$30</h2>
            <p className='description'>These are a bunch of good quality tee shirt. More will be added soon</p>   
            <p className='description'>shirts:</p>
            <img className='product-image' src='https://ofour.com/wp-content/uploads/2020/12/1-21.jpg'></img>
            <p className='title'>[1301] | Palace x Arcteryx</p>
            
            <img className='product-image' src='https://image-cdn.hypb.st/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F10%2F4e%2Ftshirt-4-1-cdf96.jpg?fit=max&w=720&q=90'></img>
            <p className='title'>[1302] | Rhude x Monaco</p>
 
            <img className='product-image' src='https://cdn.fashiola.fr/L742830166/stone-island-t-shirt-en-coton-a-motif-compass.jpg'></img>
            <p className='title'>[1303] | Stone island - size up twice</p>

            <img className='product-image' src='https://cf.shopee.vn/file/f48699867022b9fdf1d312db87c93d6e'></img>
            <p className='title'>[1304] | NBA x FOG</p>

            <img className='product-image' src='https://cdna.lystit.com/1200/630/tr/photos/baltini/4ab77fb3/gallery-dept-Beige-venice-Carshow-T-shirt.jpeg'></img>
            <p className='title'>[1305] | Gallery Dept Venice car show</p>

            <img className='product-image' src='https://clothbase.s3.amazonaws.com/uploads/dd5f66d8-251a-45c3-ba20-91d3f55eb302/image.jpg'></img>
            <p className='title'>[1306] | Rhude Panther</p>

            <img className='product-image' src='http://cdn.shopify.com/s/files/1/2171/8711/products/MOONLIGHTRHACERTEECREMEBACK_1024x1024.jpg?v=1628792475'></img>
            <p className='title'>[1307] | Rhude x Mclaren</p>

            <img className='product-image' src='https://cdn.shopify.com/s/files/1/0235/0370/0064/products/image_885774da-6484-4e4b-99f6-a04b3bc2ee44.jpg?v=1668795915'></img>
            <p className='title'>[1308] | Gallery Dept Porsche</p>

            <img className='product-image' src='https://www.rhcph.dk/media/catalog/product/s/_/s_s_kogancult_crystal_t_shirt_i02963302xx02xx.jpg'></img>
            <p className='title'>[1309] | Carhartt KOGANKULT Crystal</p>
            </div>
            </div>
            </header>
        );
    }
}

export default Tees;