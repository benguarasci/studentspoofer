import React from 'react';
import './base.css';

function Nav() {
  return (
    <div className="nav" id="nav">
    <h2 className="desktop-header">Benjamin Guarasci</h2>
    <h2 className="mobile-header">BG</h2>
    <ul className = "navbar">
        <a className='nav-item' href="#about" id="nav">Subscribe</a>
        <a className='nav-item' href="#projects" id="nav">About</a>
        <a className='nav-item' href="#contact" id="nav">Feedback</a>
    </ul>
    </div>
  );
}

export default Nav;
