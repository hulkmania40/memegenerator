import React from 'react';
import logo from '../images/troll-face.png'
export default function Header() {
  return (
  <div>
    <nav className="navbar navbar-light bg-light navcss">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="" className='nav--logo'/>
                <span className='nav--text'>Meme Generator - Beta Version <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-emoji-emoji-justicon-lineal-color-justicon-4.png"/></span>
            </a>
            <h4>Made with <img src="https://img.icons8.com/fluency/40/000000/filled-like.png"/> by Mubashir</h4>
        </div>
    </nav>
  </div>
  );
}
